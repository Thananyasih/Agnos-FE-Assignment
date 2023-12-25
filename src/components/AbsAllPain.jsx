import React from 'react'
import PainsData from './PainsData'

const AbsAllPain = () => {

  return (
    <div className='container flex flex-row absolute'>
        <img src={PainsData.absPain.absImg.absTop} alt="Epigastrium Pain" className='absolute' />
        <img src={PainsData.absPain.absImg.absLeftUp} alt="Luq Pain" className='absolute'/>
        <img src={PainsData.absPain.absImg.absLeftLow} alt="Llq Pain" className='absolute'/>
        <img src={PainsData.absPain.absImg.absRightUp} alt="Ruq Pain" className='absolute'/>
        <img src={PainsData.absPain.absImg.absRightLow} alt="Rlq Pain" className='absolute'/>
        <img src={PainsData.absPain.absImg.absMid} alt="Umbilicus Pain" className='absolute'/>
        <img src={PainsData.absPain.absImg.absBottom} alt="Suprapubic Pain" />
    </div>
  )
}

// const absTopPain = () => {
//     return (
//     <img src={PainsData.absPain.absImg.absTop} alt="Epigastrium Pain" className='absolute' />
//     )
// }

export default AbsAllPain;