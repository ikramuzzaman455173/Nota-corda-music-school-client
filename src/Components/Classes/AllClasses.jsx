import React from 'react'
import PageBanner from '../SharedComponents/PageBanner'
import Container from '../SharedComponents/Container'
import UseAllClass from '../../Hooks/UseAllClass'
import ClassCard from './ClassCard'
import InfoText from '../SharedComponents/InfoText'

const AllClasses = () => {
  const [allClass] = UseAllClass()
  const approvedClasses = allClass.filter(singleClass => singleClass.status === 'approved');
  return (
    <>
      <PageBanner heading={'All Classes Page'} bgImg={'https://solfeggio.cmsmasters.net/wp-content/uploads/2017/12/h4.jpg'} />
      <div className='md:my-10 my-0'>
        <InfoText title={'All Classes'} />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            {approvedClasses.map((singleClass, i) => (
              <ClassCard key={i} singleClass={singleClass} />
            ))}
          </div>
        </Container>
      </div>


    </>
  )
}

export default AllClasses