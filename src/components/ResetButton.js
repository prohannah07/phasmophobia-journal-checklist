import React, {useContext} from 'react'
import './ResetButton.css'
import {EvidenceContext} from './../EvidenceContext'

function ResetButton({children}) {
    const {evidence1, evidence2, evidence3, prev1, prev2, prev3} = useContext(EvidenceContext)
    const[firstEvidenceFound, setFirstEvidenceFound] = evidence1
    const[secondEvidenceFound, setSecondEvidenceFound] = evidence2
    const[thirdEvidenceFound, setThirdEvidenceFound] = evidence3
    const[firstPrevClicked, setFirstPrevClicked] = prev1
    const[secondPrevClicked, setSecondFirstPrevClicked] = prev2
    const[thirdPrevClicked, setThirdPrevClicked] = prev3

    const handleClick = () => {
        setFirstEvidenceFound("")
        setSecondEvidenceFound("")
        setThirdEvidenceFound("")
        setFirstPrevClicked("")
        setSecondFirstPrevClicked("")
        setThirdPrevClicked("")
    }

    return (
        <button className="btn-style" onClick={() => handleClick()}>
            {children}
        </button>
    )
}

export default ResetButton
