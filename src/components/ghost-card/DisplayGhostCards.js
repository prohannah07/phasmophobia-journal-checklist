import React, {useContext, useEffect, useState} from 'react'
import ghostDatabase from './../../GhostsDatabase'
import GhostCard from './GhostCard'
import './DisplayGhostCards.css'
import {EvidenceContext} from  './../../EvidenceContext'


function DisplayGhostCards() {
    const {evidence1, evidence2, evidence3} = useContext(EvidenceContext)
    const[firstEvidenceFound, setFirstEvidenceFound] = evidence1
    const[secondEvidenceFound, setSecondEvidenceFound] = evidence2
    const[thirdEvidenceFound, setThirdEvidenceFound] = evidence3

    const [ghostsLeft, setGhostsLeft] = useState([...ghostDatabase])

    useEffect(() => {
 
        if (firstEvidenceFound.length>0 && secondEvidenceFound.length>0 && thirdEvidenceFound.length>0){
            setGhostsLeft(ghostDatabase.filter((ghost)=>(ghost['evidence'].includes(firstEvidenceFound) && ghost['evidence'].includes(secondEvidenceFound) && ghost['evidence'].includes(thirdEvidenceFound) )))
        }else if (firstEvidenceFound.length>0 && secondEvidenceFound.length>0){
            setGhostsLeft(ghostDatabase.filter((ghost)=>(ghost['evidence'].includes(firstEvidenceFound) && ghost['evidence'].includes(secondEvidenceFound) )))
        }else if (firstEvidenceFound.length>0){
            setGhostsLeft(ghostDatabase.filter((ghost)=>(ghost['evidence'].includes(firstEvidenceFound))))
        }else{
            setGhostsLeft(ghostDatabase)
        }

        return () => {
            console.log("unmounting...")
        }
    }, [firstEvidenceFound, secondEvidenceFound, thirdEvidenceFound])

    return (
        <div className="as-in-pinaka-labas">
            {/* <span className="possible-ghosts">Possible Ghosts</span> */}

            <div className="ghost-cards-lalagyan">
                {ghostsLeft.map((ghost)=>(
                    <GhostCard key={ghost["name"]} ghostName={ghost["name"]} ghostDesc={ghost["description"]} ghostStrengths={ghost["strengths"]} ghostWeaknesses={ghost["weaknesses"]} ghostEvidences={ghost["evidence"]}/>
                ))}
            </div>
        </div>
        
    )
}

export default DisplayGhostCards
