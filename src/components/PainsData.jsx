//Abs Image
import absTop from '../assets/epigastrium-highlight.png'
import absLeftUp from '../assets/luq-highlight.png'
import absLeftLow from '../assets/llq-highlight.png'
import absRightUp from '../assets/ruq-highlight.png'
import absRightLow from '../assets/rlq-highlight.png'
import absMid from '../assets/umbilicus-highlight.png'
import absBottom from '../assets/suprapubic-highlight.png'
//------ Abs Message -----//
import absTopMes from '../assets/epigastrium-active.png'
import absLeftUpMes from '../assets/luq-active.png'
import absLeftLowMes from '../assets/llq-active.png'
import absRightUpMes from '../assets/ruq-active.png'
import absRightLowMes from '../assets/rlq-active.png'
import absMidMes from '../assets/umbilicus-active.png'
import absBottomMes from '../assets/suprapubic-active.png'


//Fingers Image
import fingTop from '../assets/dip-highlight.png'
import fingMid from '../assets/pip-highlight.png'
import fingBottom from '../assets/mcp-highlight.png'
//------ Fingers Message -----//
import fingTopMes from '../assets/dip-active.png'
import fingMidMes from '../assets/pip-active.png'
import fingBottomMes from '../assets/mcp-active.png'



const PainsData = {
    absPain: {
        absImg:{
            absTop,
            absLeftUp,
            absLeftLow,
            absRightUp,
            absRightLow,
            absMid,
            absBottom,
        },
        absMes: {
            absTopMes,
            absLeftUpMes,
            absLeftLowMes,
            absRightUpMes,
            absRightLowMes,
            absMidMes,
            absBottomMes
        },       
    },

    fingersPain: {
        fingImg: {
            fingTop,
            fingMid,
            fingBottom,
        },
        fingMes: {
            fingTopMes,
            fingMidMes,
            fingBottomMes,
        }
    },

}

export default PainsData