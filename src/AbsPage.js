import React from 'react'
import absImage from './assets/default-abs.png'
import NextButton from './components/NextButton'

const AbsPage = () => {
  return (
    <div className="relative flex justify-center flex-col">
      <div className="border-solid border-2 border-gray-300 rounded-3xl shadow-3xl ml-6 mr-6 mt-5 relative flex justify-center flex-col">
        <h1 className="text-3xl font-sans text-center m-5 mt-10 mb-0 text-gray-600">ปวดท้องที่บริเวณใดมากที่สุด?</h1>
        <img src={absImage} alt="Default Abs" className="text-center"></img>
      </div>
      <div className="relative text-center">
        <NextButton/>
      </div>
    </div>
  )
}
export default AbsPage
