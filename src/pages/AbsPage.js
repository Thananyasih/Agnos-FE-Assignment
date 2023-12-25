import React, { useState } from 'react'
import NextButton from '../components/NextButton'
import absImage from '../assets/default-abs.png'
import absAllPain from '../assets/all-over-highlight.png'
import AbsPainPoint from '../components/AbsPainPoint'


const AbsPage = (props) => {
  const [isAllPain, setIsAllPain] = useState(false)

  const handleAllPain = () => {
    setIsAllPain(isAllPain => !isAllPain);
  }

  
  return (
    <div className='m-5 mt-3'>
      <div className="container relative flex flex-col text-center top-0 max-h-full mac:max-w-macScreen sm:max-w-smScreen md:max-w-mdScreen lg:max-w-lgScreen xl:max-w-xlScreen 2xl:max-w-fullScreen z-50">
        <div className="justify-items-center flex flex-col border-solid border-2 border-gray-300 rounded-3xl shadow-3xl">
          <h1 className="sm:text-sm md:text-md lg:text-lg xl:text-xl font-sans m-5 mt-8 mb-0 text-gray-600">ปวดท้องที่บริเวณใดมากที่สุด?</h1>
          <div className='flex flex-col relative'>
            <img src={absImage} alt="Default Abs" className='relative'/>
            <button type='button' className='p-1.5 bg-red-500 border-gray-300 ' onClick={handleAllPain}>Clicked</button>

            {!isAllPain ? <img src={absImage} alt="Default Abs" className='absolute'/> :
              (
                <div className='absolute'>
                  <AbsPainPoint/>
                  <img src={absAllPain} alt="All Abs Pain"/>
                </div>
              )}
          </div>
        </div>
        <div className='container relative flex flex-col mt-5'>
          <NextButton />
        </div>      
      </div>
    </div>
  )
}
export default AbsPage
