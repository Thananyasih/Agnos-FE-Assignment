import React from 'react'
import absImage from '../assets/default-abs.png'
import NextButton from '../components/NextButton'

const AbsPage = () => {
  return (
    <div className='m-5 mt-3'>
      <div className="container relative flex flex-col text-center top-0 max-h-full xl:max-w-macScreen 2xl:max-w-fullScreen">
        <div className="justify-items-center flex flex-col border-solid border-2 border-gray-300 rounded-3xl shadow-3xl">
          <h1 className="sm:text-sm md:text-md lg:text-lg xl:text-xl font-sans m-5 mt-8 mb-0 text-gray-600">ปวดท้องที่บริเวณใดมากที่สุด?</h1>
          <img src={absImage} alt="Default Abs"></img>
        </div>
        <div className='container relative flex flex-col mt-5'>
          <NextButton/>
        </div>      
      </div>
    </div>
  )
}
export default AbsPage
