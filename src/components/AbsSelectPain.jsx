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
                <img src={PainsData.absPain.absMes.absTopMes} alt='Epigastrium Pain'className='absolute left-[10px]'/>
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
                <img src={PainsData.absPain.absMes.absRightUpMes} alt='Ruq Pain'className='absolute 2xl:top-[68px] xl:top-[65px] md:top-[50px] sm:top-[50px]'/>
                <img src={PainsData.absPain.absImg.absRightUp} alt="Ruq Pain" className='relative' /> 
            </div>)}
        </div>

        <div className='container flex flex-row absolute'>
            {!rlqAbsSelected ? (<img src={PainsData.absPain.absImg.absRightLow} alt="Rlq Pain" className='relative opacity-0'/>) : 
            (<div>
                <img src={PainsData.absPain.absMes.absRightLowMes} alt='Rlq Pain'className='absolute 2xl:-top-[55px] xl:-top-[50px] md:-top-[28px] sm:-top-[28px] '/>
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
                <img src={PainsData.absPain.absMes.absBottomMes} alt="Suprapubic Pain"className='absolute top-[20px] left-[10px]'/>
                <img src={PainsData.absPain.absImg.absBottom} alt="Suprapubic Pain" className='relative' /> 
            </div>)}
        </div>
        
        <button type='button' className='absolute top-[204px] right-[220px] px-[28px] p-[27px] 
        xl:top-[258px] xl:right-[280px] xl:px-[35px] xl:p-[35px] 
        2xl:top-[270px] 2xl:right-[298px] 2xl:p-[36px] rotate-45 rounded-xl' onClick={handleTopAbs}/>

        <button type='button' className='absolute top-[242px] right-[175px] px-[27px] p-[26px] 
        xl:top-[308px] xl:right-[220px] xl:px-[36px] xl:p-[32px] 2xl:top-[322px] 
        2xl:right-[230px] 2xl:px-[38px] 2xl:p-[35px] rotate-45 rounded-full' onClick={handleLuqAbs}/>

        <button type='button' className='absolute top-[305px] right-[175px] px-[26px] p-[27px] 
        xl:top-[385px] xl:right-[223px] xl:px-[32px] xl:p-[33px] 2xl:top-[405px] 
        2xl:right-[235px] 2xl:px-[32px] 2xl:p-[36px] rotate-45 rounded-3xl' onClick={handleLlqAbs}/>

        <button type='button' className='absolute top-[242px] right-[270px] px-[27px] p-[26px] 
        xl:top-[308px] xl:right-[340px] xl:px-[36px] xl:p-[32px] 2xl:top-[322px] 
        2xl:right-[355px] 2xl:px-[38px] 2xl:p-[35px] -rotate-45 rounded-full' onClick={handleRuqAbs}/>
        
        <button type='button' className='absolute top-[305px] right-[275px] px-[26px] p-[27px] 
        xl:top-[370px] xl:right-[345px] xl:px-[32px] xl:p-[33px] 2xl:top-[405px] 
        2xl:right-[365px] 2xl:px-[32px] 2xl:p-[36px] -rotate-45 rounded-3xl' onClick={handleRlqAbs}/>

        <button type='button' className='absolute top-[275px] right-[225px] px-[24px] p-[24px] 
        xl:top-[350px] xl:right-[286px] xl:px-[30px] xl:p-[30px] 2xl:top-[369px] 
        2xl:right-[300px] 2xl:px-[32px] 2xl:p-[32px] -rotate-45 rounded-full' onClick={handleMidAbs}/>

        <button type='button' className='absolute top-[335px] right-[222px] px-[25px] p-[27px] 
        xl:top-[425px] xl:right-[280px] xl:px-[33px] xl:p-[33px] 
        2xl:top-[448px] 2xl:right-[295px] 2xl:p-[34px] -rotate-45 rounded-3xl' onClick={handleBottomAbs}/>

    </div>
  )
}

export default AbsSelectPain