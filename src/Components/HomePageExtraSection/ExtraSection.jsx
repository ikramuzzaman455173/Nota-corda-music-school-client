import React from 'react'
import InfoText from '../SharedComponents/InfoText'

const ExtraSection = () => {
  const collageInfo = [{ num: 231, info: 'students' }, { num: 14, info: 'teachers' }, { num: 32, info: 'Programmes' }, { num: 21, info: 'awards' }]
  return (
    <>
      <InfoText title={'Our School Info'} />
      <div className='w-full h-[550px] bg-cover object-cover bg-[url("https://melody.ancorathemes.com/wp-content/uploads/2016/05/bg2-Parallax.jpg")] border-2 relative '>
        <div className='flex items-center flex-col my-20'>
          <h3 className='text-white font-bold font-Pt text-5xl tracking-wider dark:font-Merienda'>Nota Corda Music School</h3>
          <p className='text-[17px] tracking-wide font-medium w-[45%] text-center mt-5 text-white font-Pt dark:font-Merienda'>We have talented and very experienced instructors who teach piano, violin, guitar, cello, and other instruments.</p>
        </div>
        <div className='flex lg:flex-row md:flex-col flex-wrap justify-center gap-20 w-full relative left-20 items-center'>
          {collageInfo.map((clg, i) => {
            return (
              <div key={i} className='w-[165.83px] h-[165.83px] border-[1px] bg-transparent rounded-full relative'>
                <div className='w-[121.01px] h-[121.01px] bg-[#ffffff1a] rounded-full absolute top-[22px] right-[22px]'>
                  <h3 className='text-[50px] text-center my-5 text-white dark:font-pt font-Merienda'>{clg.num}</h3>
                  <p className='text-3xl font-medium dark:font-Merienda font-Pt text-white my-14 tracking-wider'>{clg.info}</p>
                </div>
              </div>
            )
          })}



          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default ExtraSection