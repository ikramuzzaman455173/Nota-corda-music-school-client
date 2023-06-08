import { useState, useEffect } from 'react'
import InfoText from '../SharedComponents/InfoText'
import PopularCard from './PopularCard'
import Container from '../SharedComponents/Container'

const PopularInstructors = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('/instructor.json').then(response => response.json()).then(data => {
      console.log(data)
      setData(data)
    }).catch(error => console.log(`404 page not found ${error}`))
  }, [])
  console.log('data', data);
  return (
    <div className='my-20'>
      <Container>
        <InfoText title={'Our Popular Instructors'} />
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
          {data.map((singleInstructor, i) => <PopularCard key={i} singleInstructor={singleInstructor} />)}
        </div>
      </Container>
    </div>
  )
}

export default PopularInstructors