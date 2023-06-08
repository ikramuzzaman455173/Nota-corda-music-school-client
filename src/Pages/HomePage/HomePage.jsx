import React from 'react'
import CarouselSlider from '../../Components/BannerSlider/CarouselSlider'
import PopularClasses from '../../Components/Classes/PopularClasses'
import PopularInstructors from '../../Components/Instructors/PopularInstructors'

const HomePage = () => {
  return (
    <>
      <CarouselSlider />
      <div className='md:mt-[500px] mt-[400px]'>
        <PopularClasses />
        <PopularInstructors/>
      </div>
    </>
  )
}

export default HomePage