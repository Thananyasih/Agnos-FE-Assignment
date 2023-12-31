import React,{useState} from 'react'

import fingersImage from '../assets/default-finger.png'
import othersPain from '../assets/others-highlight.png'
import NextButton from '../components/NextButton'
import FingerSelectPain from '../components/FingerSelectPain'

const FingersPage = () => {

    const fingersQuestion = 'จุดไหนที่คุณปวดนิ้วมากที่สุด??'
    const [isOthersPain, setIsOthersPain] = useState(false)

    const handleOthersPainClick = () => {
      setIsOthersPain(isOthersPain => !isOthersPain);
    }
  return (
    <div className='m-5 mt-3'>
      <div className="container relative flex flex-col text-center top-0 max-h-full mac:max-w-macScreen sm:max-w-smScreen md:max-w-mdScreen lg:max-w-lgScreen xl:max-w-xlScreen 2xl:max-w-fullScreen z-50">
        <div className="justify-items-center flex flex-col border-solid border-2 border-gray-300 rounded-3xl shadow-3xl">
          <h1 className="sm:text-sm md:text-md lg:text-lg xl:text-xl font-sans m-5 mt-8 mb-0 text-gray-600">{fingersQuestion}</h1>
          <div className='flex flex-col relative items-center'>
              <img src={fingersImage} alt="Default Abs" className='relative'/>

              {!isOthersPain ? <img src={fingersImage} alt="Default Abs" className='absolute'/> && (<div className='absolute'>
                  <FingerSelectPain/>
                </div>) :
                (
                  <div className='absolute'>
                    <img src={othersPain} alt="All Abs Pain"/>
                  </div>
                )}

                {/* Others Finger Pain Button */}
                <button type='button' className='absolute top-[500px] right-[174px] pl-[75px] pr-[75px] p-[22px]
                fold:top-[208px] fold:right-[35px] fold:px-[70px] fold:p-[10px] xs:top-[315px] xs:right-[52px] xs:px-[102px] xs:p-[14px]
                lg:top-[505px] lg:right-[80px] lg:p-[23px] lg:px-[165px] sm:top-[505px] sm:right-[80px] sm:p-[23px] sm:px-[165px] xl:top-[640px] xl:right-[100px] xl:p-[30px] xl:px-[210px] 
                2xl:top-[676px] 2xl:right-[100px] 2xl:p-[30px] 2xl:px-[225px] border-gray-300 rounded-full' onClick={handleOthersPainClick}/>

        </div>
        </div>
        <div className='container flex flex-col mt-5'>
          <NextButton />
        </div>      
      </div>
    </div>
  )
}

export default FingersPage