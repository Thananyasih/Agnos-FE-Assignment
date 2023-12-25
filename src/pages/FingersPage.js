import React from 'react'

import fingersImage from '../assets/default-finger.png'
import NextButton from '../components/NextButton'

const FingersPage = () => {

  return (
    <div className='m-5 mt-3'>
      <div className="container relative flex flex-col text-center top-0 max-h-full mac:max-w-macScreen sm:max-w-smScreen md:max-w-mdScreen lg:max-w-lgScreen xl:max-w-xlScreen 2xl:max-w-fullScreen z-50">
        <div className="justify-items-center flex flex-col border-solid border-2 border-gray-300 rounded-3xl shadow-3xl">
          <h1 className="sm:text-sm md:text-md lg:text-lg xl:text-xl font-sans m-5 mt-8 mb-0 text-gray-600">จุดไหนที่คุณปวดนิ้วมากที่สุด?</h1>
          <img src={fingersImage} alt="Default Fingers"></img>
        </div>
        <div className='container flex flex-col mt-5'>
          <NextButton />
        </div>      
      </div>
    </div>
  )
}

export default FingersPage