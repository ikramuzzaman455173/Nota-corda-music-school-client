import React from 'react'
import CheckOutForm from './CheckOutFrom'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import UseSelectClass from '../../../Hooks/UseSelectClass'
import { useLocation } from 'react-router-dom'

const Payment = () => {
  const location = useLocation()
  //todo provide publishable key
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK)
  const [selectClass] = UseSelectClass()
  const singleSelectClass = selectClass.find(item => item._id === location.state.id)
  console.log(singleSelectClass,'sigleSelectClass');
  // const totalAmount = selectClass.reduce((sum, item) => sum + item.price, 0)
  const currentPrice = location.state.price
  const price = parseFloat(currentPrice.toFixed(2))
  console.log('price',price);
  return (
    <div>
      <Elements stripe={stripePromise}>
      <CheckOutForm singleSelectClass={singleSelectClass} price={price}></CheckOutForm>
      </Elements>
    </div>
  )
}

export default Payment