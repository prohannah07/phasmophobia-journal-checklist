import React, {useState, useContext, useEffect} from 'react'
import './GhostTableData.css'
import {EvidenceContext} from './../../EvidenceContext'

const GhostTableData = ({firstEvidence, secondEvidence, thirdEvidence, fourthEvidence, fifthEvidence, sixthEvidence, ghostEvidences, ghostName, index, ghostsLeftLength}) => {

    const {evidence1, evidence2, evidence3} = useContext(EvidenceContext)
    const[firstEvidenceFound, setFirstEvidenceFound] = evidence1
    const[secondEvidenceFound, setSecondEvidenceFound] = evidence2
    const[thirdEvidenceFound, setThirdEvidenceFound] = evidence3

    const isEvidenceFound = (evidence, evidenceFound) => {
        if( ghostEvidences.includes(evidence) && evidenceFound.length>0){
            return "dot-found"
        }else if (ghostEvidences.includes(evidence)){
            return "dot"
        }else{
            return ""
        }
    }

    const isEvidence = (evidence) => {
        if (ghostEvidences.includes(evidence)){
            return "dot"
        }else{
            return ""
        }
    }

    const isRoundCorner = () => {
        if(index===0 && ghostsLeftLength===1){
            return "ghost-name-lalagyan-both"
        }else if(index===0){
            return "ghost-name-lalagyan-first"
        }else if (index===ghostsLeftLength-1){
            return "ghost-name-lalagyan-last"
        }else{
            return "ghost-name-lalagyan"
        }
    }


    return (
        <div className="ghost-data-lalagyan">

            <div className={isRoundCorner()}>
                <span className="ghost-name">{ghostName}</span>
            </div>

            <div className={firstEvidenceFound.length>0 ? "possible-evidence-found" : "possible-evidence"}>
                <div className={isEvidenceFound(firstEvidence, firstEvidenceFound)}></div>
            </div>

            <div className={secondEvidenceFound.length>0 ? "possible-evidence-found" : "possible-evidence"}>
                <div className={isEvidenceFound(secondEvidence, secondEvidenceFound)}></div>
            </div>

            <div className={thirdEvidenceFound.length>0 ? "possible-evidence-found" : "possible-evidence"}>
                <div className={isEvidenceFound(thirdEvidence, thirdEvidenceFound)}></div>
            </div>

            <div className="possible-evidence">
                <div className={isEvidence(fourthEvidence)}></div>
            </div>

            <div className="possible-evidence">
                <div className={isEvidence(fifthEvidence)}></div>
            </div>

            <div className={ghostsLeftLength===1 || ghostsLeftLength-1===index ? "possible-evidence-last" : "possible-evidence"}>
                <div className={isEvidence(sixthEvidence)}></div>
            </div>
            
        </div>
    )
}

export default GhostTableData
