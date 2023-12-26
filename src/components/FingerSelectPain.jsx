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
        fold:top-[55px] fold:right-[145px] fold:px-[5px] fold:p-[5px]
        xs:top-[80px] xs:right-[220px] xs:px-[10px] xs:p-[10px]
        sm:top-[130px] sm:right-[355px] sm:px-[14px] sm:p-[14px]
        lg:top-[130px] lg:right-[355px] lg:px-[14px] lg:p-[14px] 
        xl:top-[168px] xl:right-[445px] xl:px-[20px] xl:p-[15px]
        2xl:top-[180px] 2xl:right-[470px] 2xl:px-[18px] 2xl:p-[14px] -rotate-45 rounded-ful' onClick={handleTopFinger}/>

        <button type='button' className='absolute top-[75px] right-[290px] px-[16px] p-[10px] 
        fold:top-[29px] fold:right-[122px] fold:px-[5px] fold:p-[5px]
        xs:top-[45px] xs:right-[180px] xs:px-[10px] xs:p-[10px]
        sm:top-[75px] sm:right-[290px] sm:px-[14px] sm:p-[14px]
        lg:top-[70px] lg:right-[290px] lg:px-[14px] lg:p-[14px] 
        xl:top-[90px] xl:right-[370px] xl:px-[20px] xl:p-[15px] 
        2xl:top-[100px] 2xl:right-[390px] 2xl:px-[18px] 2xl:p-[14px] rounded-ful' onClick={handleTopFinger}/>

        <button type='button' className='absolute top-[50px] right-[240px] px-[16px] p-[10px] 
        fold:top-[20px] fold:right-[100px] fold:px-[5px] fold:p-[5px]
        xs:top-[30px] xs:right-[150px] xs:px-[10px] xs:p-[10px]
        sm:top-[45px] sm:right-[240px] sm:px-[14px] sm:p-[14px]
        lg:top-[45px] lg:right-[240px] lg:px-[14px] lg:p-[14px] 
        xl:top-[60px] xl:right-[305px] xl:px-[20px] xl:p-[15px] 
        2xl:top-[68px] 2xl:right-[322px] 2xl:px-[20px] 2xl:p-[14px] rounded-ful' onClick={handleTopFinger}/>

        <button type='button' className='absolute top-[65px] right-[180px] px-[16px] p-[10px] 
        fold:top-[25px] fold:right-[76px] fold:px-[5px] fold:p-[5px]
        xs:top-[35px] xs:right-[110px] xs:px-[10px] xs:p-[10px]
        sm:top-[60px] sm:right-[180px] sm:px-[14px] sm:p-[14px]
        lg:top-[55px] lg:right-[185px] lg:px-[14px] lg:p-[14px] 
        xl:top-[80px] xl:right-[228px] xl:px-[20px] xl:p-[15px] 
        2xl:top-[85px] 2xl:right-[245px] 2xl:px-[19px] 2xl:p-[14px] rounded-ful' onClick={handleTopFinger}/>

        {/* Mid Finger Pain Selected button */}
        <button type='button' className='absolute top-[176px] right-[334px] px-[14px] p-[10px] 
        fold:top-[72px] fold:right-[138px] fold:px-[6px] fold:p-[6px]
        xs:top-[109px] xs:right-[205px] xs:px-[10px] xs:p-[10px]
        sm:top-[170px] sm:right-[330px] sm:px-[14px] sm:p-[14px]
        lg:top-[170px] lg:right-[332px] lg:px-[14px] lg:p-[14px] 
        xl:top-[220px] xl:right-[420px] xl:px-[20px] xl:p-[15px] 
        2xl:top-[235px] 2xl:right-[448px] 2xl:px-[18px] 2xl:p-[14px] -rotate-12 rounded-full' onClick={handleMidFinger}/>

        <button type='button' className='absolute top-[133px] right-[285px] px-[16px] p-[10px] 
        fold:top-[53px] fold:right-[118px] fold:px-[6px] fold:p-[6px]
        xs:top-[80px] xs:right-[175px] xs:px-[10px] xs:p-[10px]
        sm:top-[128px] sm:right-[285px] sm:px-[14px] sm:p-[14px]
        lg:top-[130px] lg:right-[285px] lg:px-[14px] lg:p-[14px] 
        xl:top-[165px] xl:right-[360px] xl:px-[20px] xl:p-[15px] 
        2xl:top-[178px] 2xl:right-[380px] 2xl:px-[22px] 2xl:p-[14px] -rotate-12 rounded-full' onClick={handleMidFinger}/>

        <button type='button' className='absolute top-[110px] right-[235px] px-[16px] p-[12px] 
        fold:top-[45px] fold:right-[98px] fold:px-[6px] fold:p-[6px]
        xs:top-[70px] xs:right-[146px] xs:px-[10px] xs:p-[10px]
        sm:top-[110px] sm:right-[235px] sm:px-[14px] sm:p-[14px]
        lg:top-[110px] lg:right-[240px] lg:px-[14px] lg:p-[14px] 
        xl:top-[140px] xl:right-[300px] xl:px-[20px] xl:p-[15px] 
        2xl:top-[150px] 2xl:right-[314px] 2xl:px-[22px] 2xl:p-[14px] rounded-full' onClick={handleMidFinger}/>

        <button type='button' className='absolute top-[120px] right-[180px] px-[17px] p-[10px] 
        fold:top-[48px] fold:right-[76px] fold:px-[6px] fold:p-[6px]
        xs:top-[70px] xs:right-[112px] xs:px-[10px] xs:p-[10px]
        sm:top-[115px] sm:right-[185px] sm:px-[14px] sm:p-[14px]
        lg:top-[114px] lg:right-[182px] lg:px-[14px] lg:p-[14px] 
        xl:top-[150px] xl:right-[230px] xl:px-[20px] xl:p-[15px] 
        2xl:top-[160px] 2xl:right-[240px] 2xl:px-[23px] 2xl:p-[14px] rounded-full' onClick={handleMidFinger}/>

        <button type='button' className='absolute top-[230px] right-[84px] px-[14px] p-[12px] 
        fold:top-[95px] fold:right-[35px] fold:px-[6px] fold:p-[6px]
        xs:top-[140px] xs:right-[55px] xs:px-[10px] xs:p-[10px]
        sm:top-[225px] sm:right-[80px] sm:px-[14px] sm:p-[14px]
        lg:top-[225px] lg:right-[85px] lg:px-[14px] lg:p-[14px] 
        xl:top-[290px] xl:right-[100px] xl:px-[20px] xl:p-[15px]  
        2xl:top-[305px] 2xl:right-[112px] 2xl:px-[20px] 2xl:p-[16px] rotate-45 rounded-full' onClick={handleMidFinger}/>

        {/* Bottom Finger Pain Selected button */}
        <button type='button' className='absolute top-[226px] right-[306px] px-[19px] p-[14px] 
        fold:top-[92px] fold:right-[127px] fold:px-[8px] fold:p-[6px]
        xs:top-[140px] xs:right-[190px] xs:px-[12px] xs:p-[10px]
        sm:top-[225px] sm:right-[305px] sm:px-[20px] sm:p-[14px]
        lg:top-[228px] lg:right-[305px] lg:px-[20px] lg:p-[14px] 
        xl:top-[280px] xl:right-[390px] xl:px-[25px] xl:p-[20px]  
        2xl:top-[302px] 2xl:right-[409px] 2xl:px-[26px] 2xl:p-[18px] -rotate-12 rounded-full' onClick={handleBottomFinger}/>

        <button type='button' className='absolute top-[133px] right-[285px] px-[16px] p-[10px] 
        fold:top-[86px] fold:right-[110px] fold:px-[8px] fold:p-[6px]
        xs:top-[130px] xs:right-[165px] xs:px-[12px] xs:p-[10px]
        sm:top-[210px] sm:right-[265px] sm:px-[20px] sm:p-[14px]
        lg:top-[210px] lg:right-[270px] lg:px-[20px] lg:p-[14px] 
        xl:top-[260px] xl:right-[340px] xl:px-[25px] xl:p-[20px] 
        2xl:top-[278px] 2xl:right-[358px] 2xl:px-[26px] 2xl:p-[18px] -rotate-12 rounded-full ' onClick={handleBottomFinger}/>

        <button type='button' className='absolute top-[110px] right-[235px] px-[16px] p-[12px] 
        fold:top-[80px] fold:right-[93px] fold:px-[8px] fold:p-[6px]
        xs:top-[120px] xs:right-[140px] xs:px-[12px] xs:p-[10px]
        sm:top-[200px] sm:right-[225px] sm:px-[20px] sm:p-[14px]
        lg:top-[200px] lg:right-[225px] lg:px-[20px] lg:p-[14px] 
        xl:top-[250px] xl:right-[285px] xl:px-[25px] xl:p-[20px] 
        2xl:top-[260px] 2xl:right-[300px] 2xl:px-[27px] 2xl:p-[18px] rounded-full' onClick={handleBottomFinger}/>

        <button type='button' className='absolute top-[120px] right-[180px] px-[17px] p-[10px] 
        fold:top-[80px] fold:right-[76px] fold:px-[8px] fold:p-[6px]
        xs:top-[120px] xs:right-[110px] xs:px-[12px] xs:p-[10px]
        sm:top-[200px] sm:right-[180px] sm:px-[20px] sm:p-[14px]
        lg:top-[195px] lg:right-[182px] lg:px-[20px] lg:p-[14px] 
        xl:top-[250px] xl:right-[230px] xl:px-[25px] xl:p-[20px] 
        2xl:top-[263px] 2xl:right-[243px] 2xl:px-[26px] 2xl:p-[18px] rotate-12 rounded-full' onClick={handleBottomFinger}/>

        <button type='button' className='absolute top-[230px] right-[84px] px-[14px] p-[12px] 
        fold:top-[120px] fold:right-[48px] fold:px-[8px] fold:p-[6px]
        xs:top-[178px] xs:right-[75px] xs:px-[12px] xs:p-[10px]
        sm:top-[295px] sm:right-[110px] sm:px-[20px] sm:p-[14px]
        lg:top-[290px] lg:right-[120px] lg:px-[20px] lg:p-[14px] 
        xl:top-[370px] xl:right-[150px] xl:px-[25px] xl:p-[20px] 
        2xl:top-[392px] 2xl:right-[155px] 2xl:px-[26px] 2xl:p-[18px] rotate-45 rounded-full ' onClick={handleBottomFinger}/>
    </div>
  )
}

export default FingerSelectPain