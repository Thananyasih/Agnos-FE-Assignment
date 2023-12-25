import React, { useState } from 'react'
import NextButton from '../components/NextButton'
import absImage from '../assets/default-abs.png'
import absAllPainBtn from '../assets/all-over-highlight.png'
import AbsPainPoint from '../components/AbsPainPoint'
import PainsData from '../components/PainsData'


const AbsPage = ({}) => {

    const [isAllPain, setIsAllPain] = useState(false)
    const [isSelected, setIsSelected] = useState(false)
    
    const handleSelect = () => {
        setIsSelected(isSelected => !isSelected)
    }   

    const handleAllPain = () => {
      setIsAllPain(isAllPain => !isAllPain);
    }
  
  return (
    <div className='m-5 mt-3'>
      <div className="container relative flex flex-col text-center top-0 max-h-full mac:max-w-macScreen sm:max-w-smScreen md:max-w-mdScreen lg:max-w-lgScreen xl:max-w-xlScreen 2xl:max-w-fullScreen z-50">
        <div className="justify-items-center flex flex-col border-solid:-2:-gray-300 rounded-3xl shadow-3xl">
          <h1 className="sm:text-sm md:text-md lg:text-lg xl:text-xl font-sans m-5 mt-8 mb-0 text-gray-600">ปวดท้องที่บริเวณใดมากที่สุด?</h1>
            <div className='flex flex-col relative items-center'>
              <img src={absImage} alt="Default Abs" className='relative' onClick={handleSelect}/>

              {!isAllPain ? <img src={absImage} alt="Default Abs" className='absolute'/> :
                (
                  <div className='absolute'>
                    <AbsPainPoint/>
                    <img src={absAllPainBtn} alt="All Abs Pain"/>
                  </div>
                )}
                <button type='button' className='absolute top-[496px] right-[174px] pl-[75px] pr-[75px] p-[22px] 
                xl:top-[628px] xl:right-[220px] xl:p-[28px] xl:px-[95px] 
                2xl:top-[660px] 2xl:right-[235px] 2xl:p-[30px] 2xl:px-[100px] bg-transparent border-gray-300 rounded-full' onClick={handleAllPain}/>
            </div>
              (<div className='absolute'>
                <AbsPainPoint/>
              </div>)
        </div>
        <div className='container relative flex flex-col mt-5'>
          <NextButton />
        </div>      
      </div>
    </div>
  )
}
export default AbsPage
