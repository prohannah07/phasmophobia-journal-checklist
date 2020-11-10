import React, {useState, useEffect} from 'react'
import './GhostCardEvidence.css'

function GhostCardEvidence({ghostEvidences,evidenceOne,evidenceTwo,evidenceThree}) {

    const [firstEvidence, setFirstEvidence] = useState("")
    const [secondEvidence, setSecondEvidence] = useState("")
    const [thirdEvidence, setThirdEvidence] = useState("")

    useEffect(() => {

        if (evidenceOne.length===0 && evidenceTwo.length===0 && evidenceThree.length===0){
            setFirstEvidence(ghostEvidences[0])
            setSecondEvidence(ghostEvidences[1])
            setThirdEvidence(ghostEvidences[2])
        }else if (evidenceOne.length > 0 && evidenceTwo.length > 0 && evidenceThree.length > 0){
            setFirstEvidence(evidenceOne)
            setSecondEvidence(evidenceTwo)
            setThirdEvidence(evidenceThree)
        }else if (evidenceOne.length > 0 && evidenceTwo.length > 0 && evidenceThree.length === 0){
            setFirstEvidence(evidenceOne)
            setSecondEvidence(evidenceTwo)
            var remaining_evidences1 = ghostEvidences.filter(evi => evi!== evidenceOne && evi!== evidenceTwo)
            setThirdEvidence(remaining_evidences1[0])
        }else if(evidenceOne.length > 0 && evidenceTwo.length === 0 && evidenceThree.length === 0){
            setFirstEvidence(evidenceOne)
            var remaining_evidences2 = ghostEvidences.filter(evi => evi!== evidenceOne)
            setSecondEvidence(remaining_evidences2[0])
            setThirdEvidence(remaining_evidences2[1])

        }
        return () => {
            console.log("unmounting...")
        }
    }, [evidenceOne, evidenceTwo, evidenceThree, ghostEvidences])



    return (
        <div className="evidence-lalagyan" >
            <div className={evidenceOne.length>0 ? "found" : "not-found" } >{firstEvidence}</div>
            <div className={evidenceTwo.length>0 ? "found" : "not-found"} >{secondEvidence}</div>
            <div className={evidenceThree.length>0 ? "found" : "not-found"} >{thirdEvidence}</div>
        </div>
    )
}

export default GhostCardEvidence
