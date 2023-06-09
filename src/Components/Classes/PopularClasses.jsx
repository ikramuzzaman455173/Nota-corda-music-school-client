import Container from '../SharedComponents/Container'
import ClassCard from './ClassCard'
import InfoText from '../SharedComponents/InfoText'
import UseClass from "../../Hooks/UseAllClass";

const PopularClasses = () => {
  const [allClass] = UseClass()

  // Filter the allClass classes with status === "approved"
  const approvedClasses = allClass.filter(singleClass => singleClass.status === "approved");

  return (
    <div>
      <Container>
        <InfoText title={'our popular classes'}/>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
          {approvedClasses.map((singleClass, i) => <ClassCard key={i} singleClass={singleClass} />)}
        </div>
      </Container>
    </div>
  )
}

export default PopularClasses