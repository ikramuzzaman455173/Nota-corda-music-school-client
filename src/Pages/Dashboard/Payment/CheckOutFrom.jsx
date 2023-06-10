import { useEffect, useState } from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { toast } from 'react-toastify';
import UseAuth from '../../../Hooks/UseAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
const CheckOutForm = ({ price, singleSelectClass }) => {
  console.log('selectClass',price,singleSelectClass);
  const { user } = UseAuth()
  const stripe = useStripe()
  const elements = useElements()
  const [cardError, setCardError] = useState('')
  const [axiosSecure] = useAxiosSecure()
  const [clientSecret, setClientSecret] = useState('')
  const [processing, setProcessing] = useState(false)
  const [transectionId, setTransectionId] = useState('')
  const selectClass = singleSelectClass
  const {_id,selectClassId,class_name,image} = selectClass||{}
  console.log(selectClass,);
  useEffect(() => {
    if (price > 0) {
      axiosSecure.post('/payment', { price })
        .then(res => {
          // console.log('paymentData', res.data.clientSecret);
          setClientSecret(res.data.clientSecret)
        })
    }
  }, [price, axiosSecure])



  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!stripe || !elements) {
      return
    }
    const card = elements.getElement(CardElement)
    if (card === null) {
      return
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })
    if (error) {
      setCardError(error.message)
      console.log(error, 'error');
    }
    else {
      setCardError('')
      // console.log('paymentMethod', paymentMethod);
    }
    setProcessing(true)
    // console.log('card', card);
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName || 'anonymous user',
          email: user?.email || 'unknown'
        }

      }
    })
    if (confirmError) {
      setCardError(confirmError)
    }
    // console.log('paymentIntent', paymentIntent);
    setProcessing(false)
    if (paymentIntent.status === 'succeeded') {
      setTransectionId(paymentIntent.id)
      // save payment information to the server
      const payment = {
        email: user?.email,
        name: user?.displayName,
        transectionId: paymentIntent.id,
        price,
        date: new Date(),
        status: 'service pending',
        selectClassItems:_id,
        selectClassId:selectClassId,
        class_name: class_name,
        image
      }
      axiosSecure.post('/payments', payment)
        .then(res => {
          if (res.data.insertResult.modifiedCount) {
            // console.log(res.data);
            toast('Pay The Payment Successfully !!!', { autoClose: 2000 })
          }
        })
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" className="btn mt-5 px-10 text-3xl" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {cardError && <p className='text-2xl text-red-600'>{cardError}</p>}
      {transectionId && <p className='text-2xl text-green-600'>Transection Complete with transectionId: {transectionId}</p>}
    </div>
  )
}

export default CheckOutForm
