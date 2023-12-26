import React, { useState } from 'react'
import PainsData from './PainsData'

const FingerSelectPain = () => {
    const [topFingerSelected, setTopFingerSelected] = useState(false)
    const [midFingerSelected, setMidFingerSelected] = useState(false)
    const [bottomFingerSelected, setBottomFingerSelected] = useState(false)

    const handleTopFinger = () => {
        setTopFingerSelected(topFingerSelected => !topFingerSelected);
    }
    const handleMidFinger = () => {
        setMidFingerSelected(midFingerSelected => !midFingerSelected);
    }
    const handleBottomFinger = () => {
        setBottomFingerSelected(bottomFingerSelected => !bottomFingerSelected);
    }

  return (
    <div className='container flex flex-row relative'>
        <div  className='container flex flex-row absolute'>
            {!topFingerSelected ? (<img src={PainsData.fingersPain.fingImg.fingTop} alt="Dip Pain" className='relative opacity-0'/>) : 
            (<div>
                <img src={PainsData.fingersPain.fingMes.fingTopMes} alt="Dip Pain" className='absolute'/>
                <img src={PainsData.fingersPain.fingImg.fingTop} alt="Dip Pain" className='relative' /> 
            </div>)}
        </div>

        <div  className='container flex flex-row absolute'>
            {!midFingerSelected ? (<img src={PainsData.fingersPain.fingImg.fingMid} alt="Pip Pain" className='relative opacity-0'/>) : 
            (<div>
                <img src={PainsData.fingersPain.fingMes.fingMidMes} alt="Pip Pain" className='absolute'/>
                <img src={PainsData.fingersPain.fingImg.fingMid} alt="Pip Pain" className='relative' /> 
            </div>)}
        </div>

        <div  className='container flex flex-row'>
            {!bottomFingerSelected ? (<img src={PainsData.fingersPain.fingImg.fingBottom} alt="Pip Pain" className='relative opacity-0'/>) : 
            (<div>
                <img src={PainsData.fingersPain.fingMes.fingBottomMes} alt="Pip Pain" className='absolute'/>
                <img src={PainsData.fingersPain.fingImg.fingBottom} alt="Pip Pain" className='relative' /> 
            </div>)}
        </div>
        
        {/* Top Finger Pain Selected button */}
        <button type='button' className='absolute top-[135px] right-[350px] px-[14px] p-[10px] 
        xl:top-[170px] xl:right-[445px] xl:px-[18px] xl:p-[14px] 
        2xl:top-[180px] 2xl:right-[470px] 2xl:px-[18px] 2xl:p-[14px] -rotate-45 rounded-full' onClick={handleTopFinger}/>

        <button type='button' className='absolute top-[75px] right-[290px] px-[16px] p-[10px] 
        xl:top-[95px] xl:right-[370px] xl:px-[18px] xl:p-[12px] 
        2xl:top-[100px] 2xl:right-[390px] 2xl:px-[18px] 2xl:p-[14px] rounded-full' onClick={handleTopFinger}/>

        <button type='button' className='absolute top-[50px] right-[240px] px-[16px] p-[10px] 
        xl:top-[65px] xl:right-[305px] xl:px-[19px] xl:p-[12px] 
        2xl:top-[68px] 2xl:right-[322px] 2xl:px-[20px] 2xl:p-[14px] rounded-full' onClick={handleTopFinger}/>

        <button type='button' className='absolute top-[65px] right-[180px] px-[16px] p-[10px] 
        xl:top-[80px] xl:right-[230px] xl:px-[19px] xl:p-[12px] 
        2xl:top-[85px] 2xl:right-[245px] 2xl:px-[19px] 2xl:p-[14px] rounded-full' onClick={handleTopFinger}/>

        {/* Mid Finger Pain Selected button */}
        <button type='button' className='absolute top-[176px] right-[334px] px-[14px] p-[10px] 
        xl:top-[224px] xl:right-[422px] xl:px-[18px] xl:p-[14px] 
        2xl:top-[235px] 2xl:right-[448px] 2xl:px-[18px] 2xl:p-[14px] -rotate-12 rounded-full' onClick={handleMidFinger}/>

        <button type='button' className='absolute top-[133px] right-[285px] px-[16px] p-[10px] 
        xl:top-[168px] xl:right-[362px] xl:px-[20px] xl:p-[14px] 
        2xl:top-[178px] 2xl:right-[380px] 2xl:px-[22px] 2xl:p-[14px] -rotate-12 rounded-full' onClick={handleMidFinger}/>

        <button type='button' className='absolute top-[110px] right-[235px] px-[16px] p-[12px] 
        xl:top-[140px] xl:right-[295px] xl:px-[22px] xl:p-[14px] 
        2xl:top-[150px] 2xl:right-[314px] 2xl:px-[22px] 2xl:p-[14px] rounded-full' onClick={handleMidFinger}/>

        <button type='button' className='absolute top-[120px] right-[180px] px-[17px] p-[10px] 
        xl:top-[153px] xl:right-[228px] xl:px-[23px] xl:p-[13px] 
        2xl:top-[160px] 2xl:right-[240px] 2xl:px-[23px] 2xl:p-[14px] rounded-full' onClick={handleMidFinger}/>

        <button type='button' className='absolute top-[230px] right-[84px] px-[14px] p-[12px] 
        xl:top-[290px] xl:right-[105px] xl:px-[20px] xl:p-[14px] 
        2xl:top-[305px] 2xl:right-[112px] 2xl:px-[20px] 2xl:p-[16px] rotate-45 rounded-full' onClick={handleMidFinger}/>

        {/* Bottom Finger Pain Selected button */}
        <button type='button' className='absolute top-[226px] right-[306px] px-[19px] p-[14px] 
        xl:top-[289px] xl:right-[388px] xl:px-[25px] xl:p-[18px] 
        2xl:top-[302px] 2xl:right-[409px] 2xl:px-[26px] 2xl:p-[18px] -rotate-12 rounded-full' onClick={handleBottomFinger}/>

        <button type='button' className='absolute top-[209px] right-[266px] px-[20px] p-[13px] 
        xl:top-[265px] xl:right-[338px] xl:px-[25px] xl:p-[18px] 
        2xl:top-[278px] 2xl:right-[358px] 2xl:px-[26px] 2xl:p-[18px] -rotate-12 rounded-full' onClick={handleBottomFinger}/>

        <button type='button' className='absolute top-[198px] right-[225px] px-[20px] p-[12px] 
        xl:top-[250px] xl:right-[285px] xl:px-[26px] xl:p-[16px] 
        2xl:top-[260px] 2xl:right-[300px] 2xl:px-[27px] 2xl:p-[18px] rounded-full' onClick={handleBottomFinger}/>

        <button type='button' className='absolute top-[196px] right-[180px] px-[20px] p-[14px] 
        xl:top-[250px] xl:right-[230px] xl:px-[25px] xl:p-[17px] 
        2xl:top-[263px] 2xl:right-[243px] 2xl:px-[26px] 2xl:p-[18px] rotate-12 rounded-full' onClick={handleBottomFinger}/>

        <button type='button' className='absolute top-[294px] right-[118px] px-[18px] p-[14px] 
        xl:top-[372px] xl:right-[148px] xl:px-[25px] xl:p-[18px] 
        2xl:top-[392px] 2xl:right-[155px] 2xl:px-[26px] 2xl:p-[18px] rotate-45 rounded-full' onClick={handleBottomFinger}/>
    </div>
  )
}

export default FingerSelectPain