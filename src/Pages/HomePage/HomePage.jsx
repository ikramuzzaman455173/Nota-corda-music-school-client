import React from 'react'
import CarouselSlider from '../../Components/BannerSlider/CarouselSlider'
import PopularClasses from '../../Components/Classes/PopularClasses'

const HomePage = () => {
  return (
    <>
      <CarouselSlider />
      <div className='md:mt-[500px] mt-[400px]'>
        <PopularClasses/>
      </div>
    </>
  )
}

export default HomePage