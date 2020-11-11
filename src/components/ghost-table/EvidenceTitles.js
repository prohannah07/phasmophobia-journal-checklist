import React, {useState, useContext, useEffect} from 'react'
import './EvidenceTitles.css'
import {EvidenceContext} from './../../EvidenceContext'
import Switch from 'react-neumorphic-toggle';

const EvidenceTitles = ({firstEvidence, secondEvidence, thirdEvidence, fourthEvidence, fifthEvidence, sixthEvidence}) => {

    const {evidence1, evidence2, evidence3, displayTable} = useContext(EvidenceContext)
    const[firstEvidenceFound, setFirstEvidenceFound] = evidence1
    const[secondEvidenceFound, setSecondEvidenceFound] = evidence2
    const[thirdEvidenceFound, setThirdEvidenceFound] = evidence3
    const [isDisplayTable, setIsDisplayTable] = displayTable

    const isDisplayTableFunc = () => {
        setIsDisplayTable(!isDisplayTable)
    }

    return (
        <div className='evidence-titles-lalagyan'>

            <div className="placebo-lalagyan">
                {/* <span className="single-evidence-name">{fifthEvidence}</span> */}
                {/* <button className={isDisplayTable? "display-table-button-no" : "display-table-button-yes"} onClick={isDisplayTableFunc}>{isDisplayTable?"no":"yes"} table</button> */}
            </div>

            <div className={firstEvidenceFound.length>0 ? "single-evidence-found" : "single-evidence"}>
                <span className={firstEvidenceFound.length>0 ? "single-evidence-name-found" : "single-evidence-name"}>{firstEvidence}</span>
            </div>

            <div className={secondEvidenceFound.length>0 ? "single-evidence-found" : "single-evidence"}>
                <span className={secondEvidenceFound.length>0 ? "single-evidence-name-found" : "single-evidence-name"}>{secondEvidence}</span>
            </div>

            <div className={thirdEvidenceFound.length>0 ? "single-evidence-found" : "single-evidence"}>
                <span className={thirdEvidenceFound.length>0 ? "single-evidence-name-found" : "single-evidence-name"}>{thirdEvidence}</span>
            </div>

            <div className="single-evidence">
                <span className="single-evidence-name">{fourthEvidence}</span>
            </div>

            <div className="single-evidence">
                <span className="single-evidence-name">{fifthEvidence}</span>
            </div>

            <div className="single-evidence">
                <span className="single-evidence-name">{sixthEvidence}</span>
            </div>

        </div>
    )
}

export default EvidenceTitles
