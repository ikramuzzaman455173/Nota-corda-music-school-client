import {useState,useEffect} from 'react'
import Container from '../SharedComponents/Container'
import ClassCard from './ClassCard'
import InfoText from '../SharedComponents/InfoText'

const PopularClasses = () => {
  const [data, setData] = useState([])
  useEffect(() => {
      fetch('/classes.json').then(response => response.json()).then(data => {
        console.log(data.classes)
        setData(data.classes)
      }).catch(error=>console.log(`404 page not found ${error}`))
  }, [])
  console.log('data',data);
  return (
    <div>
      <Container>
        <InfoText title={'our popular classes'}/>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
          {data.map((singleClass,i)=><ClassCard key={i} singleClass={singleClass} />)}
        </div>
      </Container>
    </div>
  )
}

export default PopularClasses