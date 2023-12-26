import React, {useState} from 'react'
import PainsData from './PainsData'

const AbsSelectPain = () => {
    const [topAbsSelected, setTopAbsSelected] = useState(false)
    const [luqAbsSelected, setLuqAbsSelected] = useState(false)
    const [llqAbsSelected, setLlqAbsSelected] = useState(false)
    const [ruqAbsSelected, setRuqAbsSelected] = useState(false)
    const [rlqAbsSelected, setRlqAbsSelected] = useState(false)
    const [midAbsSelected, setMidAbsSelected] = useState(false)
    const [bottomAbsSelected, setBottomAbsSelected] = useState(false)

    
    const handleTopAbs = () => {
        setTopAbsSelected(topAbsSelected => !topAbsSelected)
    }
    
    const handleLuqAbs = () => {
        setLuqAbsSelected(luqAbsSelected => !luqAbsSelected)
    }
    const handleLlqAbs = () => {
        setLlqAbsSelected(llqAbsSelected => !llqAbsSelected)
    }
    const handleRuqAbs = () => {
        setRuqAbsSelected(ruqAbsSelected => !ruqAbsSelected)
    }
    const handleRlqAbs = () => {
        setRlqAbsSelected(rlqAbsSelected => !rlqAbsSelected)
    }
    const handleMidAbs = () => {
        setMidAbsSelected(midAbsSelected => !midAbsSelected)
    }
    const handleBottomAbs = () => {
        setBottomAbsSelected(bottomAbsSelected => !bottomAbsSelected)
    }

  return (
    <div className='container flex flex-row relative'>
        <div  className='container flex flex-row absolute'>
            {!topAbsSelected ? (<img src={PainsData.absPain.absImg.absTop} alt="Epigastrium Pain" className='relative opacity-0'/>) : 
            (<div>
                <img src={PainsData.absPain.absMes.absTopMes} alt='Epigastrium Pain'className='absolute left-[10px] fold:left-[0px]'/>
                <img src={PainsData.absPain.absImg.absTop} alt="Epigastrium Pain" className='relative' /> 
            </div>)}
        </div>

        <div className='container flex flex-row absolute'>
            {!luqAbsSelected ? (<img src={PainsData.absPain.absImg.absLeftUp} alt="Luq Pain" className='relative opacity-0'/>) : 
            (<div>
                <img src={PainsData.absPain.absMes.absLeftUpMes} alt='Luq Pain'className='absolute'/>
                <img src={PainsData.absPain.absImg.absLeftUp} alt="Luq Pain" className='relative' /> 
            </div>)}
        </div>

        <div className='container flex flex-row absolute'>
            {!llqAbsSelected ? (<img src={PainsData.absPain.absImg.absLeftLow} alt="Llq Pain" className='relative opacity-0'/>) : 
            (<div>
                <img src={PainsData.absPain.absMes.absLeftLowMes} alt='Llq Pain'className='absolute'/>
                <img src={PainsData.absPain.absImg.absLeftLow} alt="Llq Pain" className='relative' /> 
            </div>)}
        </div>

        <div className='container flex flex-row absolute'>
            {!ruqAbsSelected ? (<img src={PainsData.absPain.absImg.absRightUp} alt="Ruq Pain" className='relative opacity-0'/>) : 
            (<div>
                <img src={PainsData.absPain.absMes.absRightUpMes} alt='Ruq Pain'className='absolute 2xl:top-[60px] xl:top-[60px] lg:top-[50px] md:top-[50px] sm:top-[50px] xs:top-[28px] fold:top-[20px]'/>
                <img src={PainsData.absPain.absImg.absRightUp} alt="Ruq Pain" className='relative' /> 
            </div>)}
        </div>

        <div className='container flex flex-row absolute'>
            {!rlqAbsSelected ? (<img src={PainsData.absPain.absImg.absRightLow} alt="Rlq Pain" className='relative opacity-0'/>) : 
            (<div>
                <img src={PainsData.absPain.absMes.absRightLowMes} alt='Rlq Pain'className='absolute 2xl:-top-[65px] xl:-top-[60px] md:-top-[40px] sm:-top-[40px] xs:-top-[30px] fold:-top-[15px]'/>
                <img src={PainsData.absPain.absImg.absRightLow} alt="Rlq Pain" className='relative' /> 
            </div>)}
        </div>

        <div className='container flex flex-row absolute'>
            {!midAbsSelected ? (<img src={PainsData.absPain.absImg.absMid} alt="Umbilicus Pain" className='relative opacity-0'/>) : 
            (<div>
                <img src={PainsData.absPain.absImg.absMid} alt="Umbilicus Pain" className='absolute' /> 
                <img src={PainsData.absPain.absMes.absMidMes} alt="Umbilicus Pain"className='relative'/>
            </div>)}
        </div>

        <div className='container flex flex-row '>
            {!bottomAbsSelected ? (<img src={PainsData.absPain.absImg.absBottom} alt="Suprapubic Pain" className='relative opacity-0'/>) : 
            (<div>
                <img src={PainsData.absPain.absMes.absBottomMes} alt="Suprapubic Pain"className='absolute top-[10px]  sm:left-[10px] xs:left-[5px] fold:left-[0px]'/>
                <img src={PainsData.absPain.absImg.absBottom} alt="Suprapubic Pain" className='relative' /> 
            </div>)}
        </div>
        
        {/* Epigastrium Pain Btn */}
        <button type='button' className='absolute top-[204px] right-[220px] px-[28px] p-[27px]
        fold:top-[85px] fold:right-[92px] fold:px-[11px] fold:p-[11px]
        xs:top-[128px] xs:right-[140px] xs:px-[16px] xs:p-[16px]
        sm:top-[200px] sm:right-[220px] sm:px-[28px] sm:p-[28px]
        lg:top-[200px] lg:right-[220px] lg:px-[28px] lg:p-[28px] 
        xl:top-[258px] xl:right-[280px] xl:px-[35px] xl:p-[35px] 
        2xl:top-[270px] 2xl:right-[298px] 2xl:p-[36px] rotate-45 rounded-xl' onClick={handleTopAbs}/>

        {/* Luq Pain Btn */}
        <button type='button' className='absolute top-[242px] right-[175px] px-[27px] p-[26px] 
        fold:top-[100px] fold:right-[72px] fold:px-[11px] fold:p-[11px]
        xs:top-[150px] xs:right-[110px] xs:px-[16px] xs:p-[16px]
        sm:top-[240px] sm:right-[170px] sm:px-[28px] sm:p-[28px]
        lg:top-[235px] lg:right-[170px] lg:px-[28px] lg:p-[28px] 
        xl:top-[300px] xl:right-[220px] xl:px-[35px] xl:p-[35px] 
        2xl:top-[320px] 2xl:right-[230px] 2xl:px-[38px] 2xl:p-[35px] rotate-45 rounded-full' onClick={handleLuqAbs}/>

        {/* Llq Pain Btn */}
        <button type='button' className='absolute top-[305px] right-[175px] px-[26px] p-[27px] 
        fold:top-[128px] fold:right-[73px] fold:px-[11px] fold:p-[11px]
        xs:top-[190px] xs:right-[110px] xs:px-[16px] xs:p-[16px]
        sm:top-[302px] sm:right-[170px] sm:px-[28px] sm:p-[28px]
        lg:top-[305px] lg:right-[170px] lg:px-[26px] lg:p-[26px] 
        xl:top-[385px] xl:right-[220px] xl:px-[33px] xl:p-[33px] 
        2xl:top-[405px] 2xl:right-[235px] 2xl:px-[32px] 2xl:p-[36px] rotate-45 rounded-3xl' onClick={handleLlqAbs}/>

        {/* Ruq Pain Btn */}        
        <button type='button' className='absolute top-[242px] right-[270px] px-[27px] p-[26px] 
        fold:top-[100px] fold:right-[113px] fold:px-[11px] fold:p-[11px]
        xs:top-[150px] xs:right-[170px] xs:px-[16px] xs:p-[16px]
        sm:top-[240px] sm:right-[270px] sm:px-[28px] sm:p-[28px]
        lg:top-[235px] lg:right-[270px] lg:px-[28px] lg:p-[28px] 
        xl:top-[300px] xl:right-[340px] xl:px-[35px] xl:p-[35px] 
        2xl:top-[320px] 2xl:right-[355px] 2xl:px-[38px] 2xl:p-[35px] -rotate-45 rounded-full' onClick={handleRuqAbs}/>
        
        {/* Rlq Pain Btn */}
        <button type='button' className='absolute top-[305px] right-[275px] px-[26px] p-[27px] 
        fold:top-[128px] fold:right-[113px] fold:px-[11px] fold:p-[11px]
        xs:top-[190px] xs:right-[170px] xs:px-[16px] xs:p-[16px]
        sm:top-[302px] sm:right-[270px] sm:px-[28px] sm:p-[28px]
        lg:top-[305px] lg:right-[270px] lg:px-[26px] lg:p-[26px] 
        xl:top-[385px] xl:right-[340px] xl:px-[33px] xl:p-[33px] 
        2xl:top-[405px] 2xl:right-[365px] 2xl:px-[32px] 2xl:p-[36px] -rotate-45 rounded-3xl' onClick={handleRlqAbs}/>

        {/* Umbilicus Pain Btn */}        
        <button type='button' className='absolute top-[275px] right-[225px] px-[24px] p-[24px] 
        fold:top-[115px] fold:right-[93px] fold:px-[10px] fold:p-[10px]
        xs:top-[170px] xs:right-[140px] xs:px-[16px] xs:p-[16px]
        sm:top-[272px] sm:right-[224px] sm:px-[25px] sm:p-[25px]
        lg:top-[272px] lg:right-[223px] lg:px-[25px] lg:p-[25px] 
        xl:top-[345px] xl:right-[280px] xl:px-[33px] xl:p-[33px] 
        2xl:top-[370px] 2xl:right-[300px] 2xl:px-[32px] 2xl:p-[32px] -rotate-45 rounded-full' onClick={handleMidAbs}/>

        {/* Suprapubic Pain Btn */}
        <button type='button' className='absolute top-[335px] right-[222px] px-[25px] p-[27px] 
        fold:top-[140px] fold:right-[92px] fold:px-[11px] fold:p-[11px]
        xs:top-[210px] xs:right-[140px] xs:px-[16px] xs:p-[16px]
        sm:top-[335px] sm:right-[220px] sm:px-[28px] sm:p-[28px]
        lg:top-[330px] lg:right-[220px] lg:px-[28px] lg:p-[28px] 
        xl:top-[425px] xl:right-[280px] xl:px-[33px] xl:p-[33px] 
        2xl:top-[450px] 2xl:right-[295px] 2xl:p-[34px] -rotate-45 rounded-3xl' onClick={handleBottomAbs}/>

    </div>
  )
}

export default AbsSelectPain