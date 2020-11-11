import React, {useState, useContext, useEffect} from 'react'
import './DisplayGhostTable.css'
import EvidenceTitles from './EvidenceTitles'
import GhostTableData from './GhostTableData'
import {EvidenceContext} from './../../EvidenceContext'
import ghostDatabase from './../../GhostsDatabase'

const DisplayGhostTable = () => {

    const {evidence1, evidence2, evidence3} = useContext(EvidenceContext)
    const[firstEvidenceFound, setFirstEvidenceFound] = evidence1
    const[secondEvidenceFound, setSecondEvidenceFound] = evidence2
    const[thirdEvidenceFound, setThirdEvidenceFound] = evidence3

    const [firstEvidence, setFirstEvidence] = useState("Ghost Writing")
    const [secondEvidence, setSecondEvidence] = useState("Spirit Box")
    const [thirdEvidence, setThirdEvidence] = useState("Freezing Temperatures")
    const [fourthEvidence, setFourthEvidence] = useState("Ghost Orb")
    const [fifthEvidence, setFifthEvidence] = useState("EMF 5")
    const [sixthEvidence, setSixthEvidence] = useState("Fingerprints")

    const [ghostsLeft, setGhostsLeft] = useState([...ghostDatabase])

    useEffect(() => {
        
        const ghostEvidences = ["Ghost Writing", "Spirit Box", "Freezing Temperatures", "Ghost Orb", "EMF 5", "Fingerprints"]

        if (firstEvidenceFound.length > 0 && secondEvidenceFound.length > 0 && thirdEvidenceFound.length > 0){
            setFirstEvidence(firstEvidenceFound)
            setSecondEvidence(secondEvidenceFound)
            setThirdEvidence(thirdEvidenceFound)
            let remainingEvidences1 = ghostEvidences.filter(evi => evi!== firstEvidenceFound && evi!== secondEvidenceFound && evi!== thirdEvidenceFound)
            setFourthEvidence(remainingEvidences1[0])
            setFifthEvidence(remainingEvidences1[1])
            setSixthEvidence(remainingEvidences1[2])

        }else if (firstEvidenceFound.length > 0 && secondEvidenceFound.length > 0 && thirdEvidenceFound.length === 0){
            setFirstEvidence(firstEvidenceFound)
            setSecondEvidence(secondEvidenceFound)
            let remainingEvidences2 = ghostEvidences.filter(evi => evi!== firstEvidenceFound && evi!== secondEvidenceFound)
            setThirdEvidence(remainingEvidences2[0])
            setFourthEvidence(remainingEvidences2[1])
            setFifthEvidence(remainingEvidences2[2])
            setSixthEvidence(remainingEvidences2[3])

        }else if(firstEvidenceFound.length > 0 && secondEvidenceFound.length === 0 && thirdEvidenceFound.length === 0){
            setFirstEvidence(firstEvidenceFound)
            let remainingEvidences3 = ghostEvidences.filter(evi => evi!== firstEvidenceFound)
            setSecondEvidence(remainingEvidences3[0])
            setThirdEvidence(remainingEvidences3[1])
            setFourthEvidence(remainingEvidences3[2])
            setFifthEvidence(remainingEvidences3[3])
            setSixthEvidence(remainingEvidences3[4])
        }

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
        <div className="display-table-lalagyan">
            <EvidenceTitles firstEvidence={firstEvidence} secondEvidence={secondEvidence} thirdEvidence={thirdEvidence} fourthEvidence={fourthEvidence} fifthEvidence={fifthEvidence} sixthEvidence={sixthEvidence}/>
            
            {ghostsLeft.map((ghost, i) => (
                <GhostTableData key={ghost['name']} index={i} ghostsLeftLength={ghostsLeft.length} firstEvidence={firstEvidence} secondEvidence={secondEvidence} thirdEvidence={thirdEvidence} fourthEvidence={fourthEvidence} fifthEvidence={fifthEvidence} sixthEvidence={sixthEvidence} ghostName={ghost["name"]} ghostEvidences={ghost["evidence"]}/>
            ))}
        </div>
    )
}

export default DisplayGhostTable
