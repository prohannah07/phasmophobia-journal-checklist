import React, {useContext} from 'react'
import './GhostCard.css'
import GhostCardEvidence from './GhostCardEvidence'
import {EvidenceContext} from  './../../EvidenceContext'

function GhostCard({ghostName, ghostDesc, ghostStrengths, ghostWeaknesses, ghostEvidences}) {
    const {evidence1, evidence2, evidence3} = useContext(EvidenceContext)
    const[firstEvidenceFound, setFirstEvidenceFound] = evidence1
    const[secondEvidenceFound, setSecondEvidenceFound] = evidence2
    const[thirdEvidenceFound, setThirdEvidenceFound] = evidence3

    const passedGhostEvidences = ghostEvidences

    return (
        <>
            <div className="parent-ghost-card">

                <div className="ghost-card-white-shadow"></div>

                <div className="ghost-card-black-shadow"></div>

                <div className="ghost-card-main">
                    <p className="ghost-name">{ghostName}</p>
                    <div className="ghost-evidences">
                        <GhostCardEvidence className="ghost-evidences" ghostEvidences={passedGhostEvidences} evidenceOne={firstEvidenceFound} evidenceTwo={secondEvidenceFound} evidenceThree={thirdEvidenceFound}/>
                    </div>
                    <p className="ghost-desc">{ghostDesc}</p>
                    <p className="ghost-sw"><span className="ghost-strengths">Strengths</span>: {ghostStrengths}</p>
                    <p className="ghost-sw"><span className="ghost-weaknesses">Weaknesses</span>: {ghostWeaknesses}</p>
                </div>

            </div>
            
        </>
    )
}

export default GhostCard
