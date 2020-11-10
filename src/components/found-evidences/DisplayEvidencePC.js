import React, {useContext} from 'react'
import EvidencePC from './EvidencePC'
import './DisplayEvidencePC.css'
import {EvidenceContext} from './../../EvidenceContext'
import ResetButton from './../ResetButton'

function DisplayEvidencePC() {
    const {evidence1, evidence2, evidence3} = useContext(EvidenceContext)
    const[firstEvidenceFound, setFirstEvidenceFound] = evidence1
    const[secondEvidenceFound, setSecondEvidenceFound] = evidence2
    const[thirdEvidenceFound, setThirdEvidenceFound] = evidence3

    return (
        <div className="pinaka-lalagyan">
            <div className="evidence-lalagyan">
                <EvidencePC evidenceNumber="1" locked={false}/>
                <EvidencePC evidenceNumber="2" locked={firstEvidenceFound.length>0 ? false : true}/>
                <EvidencePC evidenceNumber="3" locked={secondEvidenceFound.length>0 ? false : true}/>
            </div>

            <div className="reset-lalagyan">
                <ResetButton>Reset All</ResetButton>
            </div>
            

        </div>
    )
}

export default DisplayEvidencePC
