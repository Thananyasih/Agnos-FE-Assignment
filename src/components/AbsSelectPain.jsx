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
        setTopAbsSelected(topAbsSelected => !topAbsSelected)
    }
    const handleLlqAbs = () => {
        setTopAbsSelected(topAbsSelected => !topAbsSelected)
    }
    const handleRuqAbs = () => {
        setTopAbsSelected(topAbsSelected => !topAbsSelected)
    }
    const handleRlqAbs = () => {
        setTopAbsSelected(topAbsSelected => !topAbsSelected)
    }
    const handleMidAbs = () => {
        setTopAbsSelected(topAbsSelected => !topAbsSelected)
    }
    const handleBottomAbs = () => {
        setTopAbsSelected(topAbsSelected => !topAbsSelected)
    }

  return (
    <div className='container flex flex-row relative'>
        <div>
            {!topAbsSelected ? (<img src={PainsData.absPain.absImg.absTop} alt="Epigastrium Pain" className='relative opacity-0'/>) : 
            (<div>
                <img src={PainsData.absPain.absImg.absTop} alt="Epigastrium Pain" className='absolute' /> 
                <img src={PainsData.absPain.absMes.absTopMes} alt='Epigastrium Pain'className='relative'/>
            </div>)}
        </div>
        {/* <div className='absolute'>
            <img src={PainsData.absPain.absImg.absLeftUp} alt="Luq Pain" className='relative'/>
        </div> */}
        {/* <div>
            <img src={PainsData.absPain.absImg.absLeftLow} alt="Llq Pain" className='absolute'/>
            </div>
            <img src={PainsData.absPain.absImg.absRightUp} alt="Ruq Pain" className='absolute'/>
            <img src={PainsData.absPain.absImg.absRightLow} alt="Rlq Pain" className='absolute'/>
            <img src={PainsData.absPain.absImg.absMid} alt="Umbilicus Pain" className='absolute'/>
        <img src={PainsData.absPain.absImg.absBottom} alt="Suprapubic Pain" />    */}

        <button type='button' className='absolute top-[204px] right-[220px] px-[28px] p-[27px] 
        xl:top-[258px] xl:right-[280px] xl:px-[35px] xl:p-[35px] rotate-45 rounded-xl bg-red-0' onClick={handleTopAbs}/>
        {/* <button type='button' className='absolute top-[275px] right-[295px] px-[35px] p-[33px] rotate-45 rounded-xl bg-red-500' onClick={handleLuqAbs}/> */}
        {/* <button type='button' className='absolute top-[275px] right-[295px] px-[35px] p-[33px] rotate-45 rounded-xl bg-red-500' onClick={handleLlqAbs}/>
        <button type='button' className='absolute top-[275px] right-[295px] px-[35px] p-[33px] rotate-45 rounded-xl bg-red-500' onClick={handleRuqAbs}/>
        <button type='button' className='absolute top-[275px] right-[295px] px-[35px] p-[33px] rotate-45 rounded-xl bg-red-500' onClick={handleRlqAbs}/>
        <button type='button' className='absolute top-[275px] right-[295px] px-[35px] p-[33px] rotate-45 rounded-xl bg-red-500' onClick={handleMidAbs}/>
        <button type='button' className='absolute top-[275px] right-[295px] px-[35px] p-[33px] rotate-45 rounded-xl bg-red-500' onClick={handleBottomAbs}/> */}

    </div>
  )
}

export default AbsSelectPain