import React, {useContext} from 'react'
import './DisplayEvidenceMobile.css'
import EvidenceMobile from './EvidenceMobile'
import {EvidenceContext} from './../../EvidenceContext'
import ResetButton from './../ResetButton'

function DisplayEvidenceMobile() {
    const {evidence1, evidence2, evidence3} = useContext(EvidenceContext)
    const[firstEvidenceFound, setFirstEvidenceFound] = evidence1
    const[secondEvidenceFound, setSecondEvidenceFound] = evidence2
    const[thirdEvidenceFound, setThirdEvidenceFound] = evidence3

    return (
        
        <div className="pinaka-lalagyan-mobile">
            <EvidenceMobile evidenceNumber="1" locked={false}/>
            <EvidenceMobile evidenceNumber="2" locked={firstEvidenceFound.length>0 ? false : true}/>
            <EvidenceMobile evidenceNumber="3" locked={secondEvidenceFound.length>0 ? false : true}/>
            <ResetButton>Reset All</ResetButton>
        </div>


        // <div className="pinaka-lalagyan-mobile">
        //     <div className="evidence-lalagyan-mobile">
        //         <EvidenceMobile evidenceNumber="1" locked={false}/>
        //         <EvidenceMobile evidenceNumber="2" locked={firstEvidenceFound.length>0 ? false : true}/>
        //         <EvidenceMobile evidenceNumber="3" locked={secondEvidenceFound.length>0 ? false : true}/>
        //     </div>

        //     <div className="reset-lalagyan-mobile">
        //         <ResetButton>Reset All</ResetButton>
        //     </div>
        // </div>
    )
}

export default DisplayEvidenceMobile
