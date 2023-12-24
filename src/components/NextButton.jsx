import React from 'react'
import {useNavigate} from 'react-router-dom'




const NextButton = () => {

    const navigate = useNavigate();

    const navigateToFingerpage = () => {
    navigate('/fingersPainAnalyze');
    };

  return (
    <button type='button' className=" text-gray-300 text-md font-sans text-center bg-gray-200 p-2 rounded-xl hover:text-gray-100 hover:bg-gray-400 hover:delay-50 hover:shadow-md" onClick={navigateToFingerpage}>ต่อไป</button>
  )
}

export default NextButton