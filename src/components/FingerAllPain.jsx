import React from 'react'
import PainsData from './PainsData'

const FingerAllPain = () => {
  return (
    <div className='container flex flex-row absolute'>
        <img src={PainsData.fingersPain.fingImg.fingTop} alt="Dip Pain" className='absolute' />
        <img src={PainsData.fingersPain.fingImg.fingMid} alt="Pip Pain" className='absolute'/>
        <img src={PainsData.fingersPain.fingImg.fingBottom} alt="Mcp Pain" className='absolute'/>
    </div>
  )
}

export default FingerAllPain