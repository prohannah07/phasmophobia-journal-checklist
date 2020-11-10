import React, {useState, useContext, useEffect} from 'react'
import './EvidencePC.css'
import {EvidenceContext} from './../../EvidenceContext'
import ghostDatabase from './../../GhostsDatabase'
import EvidenceRadioButton from './EvidenceRadioButton'


function EvidencePC({evidenceNumber, locked}) {

    const [isGhostWritingClicked, setIsGhostWritingClicked] =  useState(false)
    const [isSpiritBoxClicked, setIsSpiritBoxClicked] =  useState(false)
    const [isFreezingTempClicked, setIsFreezingTempClicked] =  useState(false)
    const [isGhostOrbClicked, setIsGhostOrbClicked] =  useState(false)
    const [isEMF5Clicked, setIsEMF5Clicked] =  useState(false)
    const [isFingerprintsClicked, setIsFingerprintsClicked] =  useState(false)

    const buttonMap = {
        "Ghost Writing" : isGhostWritingClicked,
        "Spirit Box" : isSpiritBoxClicked,
        "Freezing Temperatures" : isFreezingTempClicked,
        "Ghost Orb" : isGhostOrbClicked,
        "EMF 5" : isEMF5Clicked,
        "Fingerprints" : isFingerprintsClicked
    }

    const parentCardSize = {
        "1" : "parent-card-1-avail-evi",
        "2" : "parent-card-2-avail-evi",
        "3" : "parent-card-3-avail-evi",
        "4" : "parent-card-4-avail-evi",
        "5" : "parent-card-5-avail-evi",
        "6" : "parent-card",
    }

    const [ghostEvidencesLeft, setGhostEvidencesLeft] = useState(["Ghost Writing", "Spirit Box", "Freezing Temperatures", "Ghost Orb", "EMF 5", "Fingerprints"])

    const {evidence1, evidence2, evidence3, prev1, prev2, prev3} = useContext(EvidenceContext)
    const[firstEvidenceFound, setFirstEvidenceFound] = evidence1
    const[secondEvidenceFound, setSecondEvidenceFound] = evidence2
    const[thirdEvidenceFound, setThirdEvidenceFound] = evidence3
    const[firstPrevClicked, setFirstPrevClicked] = prev1
    const[secondPrevClicked, setSecondFirstPrevClicked] = prev2
    const[thirdPrevClicked, setThirdPrevClicked] = prev3

    const prevMap = {
        "1" : firstPrevClicked,
        "2" : secondPrevClicked,
        "3" : thirdPrevClicked
    }

    const setPrevMap = {
        "1" : setFirstPrevClicked,
        "2" : setSecondFirstPrevClicked,
        "3" : setThirdPrevClicked
    }

    useEffect(() => {

        if (firstPrevClicked.length===0 && secondPrevClicked.length===0 && thirdPrevClicked.length===0){
            setIsGhostWritingClicked(false)
            setIsSpiritBoxClicked(false)
            setIsFreezingTempClicked(false)
            setIsGhostOrbClicked(false)
            setIsEMF5Clicked(false)
            setIsFingerprintsClicked(false)
        }

        const ghostEvidences = ["Ghost Writing", "Spirit Box", "Freezing Temperatures", "Ghost Orb", "EMF 5", "Fingerprints"]
        
        if (firstEvidenceFound.length>0 && secondEvidenceFound.length>0 && evidenceNumber==="3"){
            const ghostLeft = ghostDatabase.filter((ghost)=>(ghost['evidence'].includes(firstEvidenceFound) && ghost['evidence'].includes(secondEvidenceFound)))
            let evidencesLeft = []
            for (let i = 0; i < ghostLeft.length ;i++){
                console.log(ghostLeft[i]['evidence'])
                evidencesLeft = evidencesLeft.concat(ghostLeft[i]['evidence'])
            }
            let result = Array.from(new Set(evidencesLeft)).filter((evi) => (evi!==firstEvidenceFound && evi!==secondEvidenceFound))
            setGhostEvidencesLeft(result)

        }else if (firstEvidenceFound.length>0 && evidenceNumber==="2"){
            console.log(ghostEvidences.filter((evi)=>(evi!==firstEvidenceFound)))
            setGhostEvidencesLeft(ghostEvidences.filter((evi)=>(evi!==firstEvidenceFound)))
        }

        return () => {
            console.log("unmounting...")
        }
    }, [firstEvidenceFound, secondEvidenceFound, evidenceNumber, firstPrevClicked, secondPrevClicked, thirdPrevClicked])

    const onChange = (e) => {
        var evidence = e.target.value

        if(prevMap[evidenceNumber].length===0){
            setPrevMap[evidenceNumber](evidence)
        }else{
            if (prevMap[evidenceNumber] === "Ghost Writing"){
                setIsGhostWritingClicked(!isGhostWritingClicked)
                setPrevMap[evidenceNumber](evidence)
            }else if(prevMap[evidenceNumber] === "Spirit Box"){
                setIsSpiritBoxClicked(!isSpiritBoxClicked)
                setPrevMap[evidenceNumber](evidence)
            }else if(prevMap[evidenceNumber] === "Freezing Temperatures"){
                setIsFreezingTempClicked(!isFreezingTempClicked)
                setPrevMap[evidenceNumber](evidence)
            }else if(prevMap[evidenceNumber] === "Ghost Orb"){
                setIsGhostOrbClicked(!isGhostOrbClicked)
                setPrevMap[evidenceNumber](evidence)
            }else if(prevMap[evidenceNumber] === "EMF 5"){
                setIsEMF5Clicked(!isEMF5Clicked)
                setPrevMap[evidenceNumber](evidence)
            }else if(prevMap[evidenceNumber] === "Fingerprints"){
                setIsFingerprintsClicked(!isFingerprintsClicked)
                setPrevMap[evidenceNumber](evidence)
            }
        }

        // if(prevClicked.length===0){
        //     setPrevClicked(evidence)
        // }else{
        //     if (prevClicked === "Ghost Writing"){
        //         setIsGhostWritingClicked(!isGhostWritingClicked)
        //         setPrevClicked(evidence)
        //     }else if(prevClicked === "Spirit Box"){
        //         setIsSpiritBoxClicked(!isSpiritBoxClicked)
        //         setPrevClicked(evidence)
        //     }else if(prevClicked === "Freezing Temperatures"){
        //         setIsFreezingTempClicked(!isFreezingTempClicked)
        //         setPrevClicked(evidence)
        //     }else if(prevClicked === "Ghost Orb"){
        //         setIsGhostOrbClicked(!isGhostOrbClicked)
        //         setPrevClicked(evidence)
        //     }else if(prevClicked === "EMF 5"){
        //         setIsEMF5Clicked(!isEMF5Clicked)
        //         setPrevClicked(evidence)
        //     }else if(prevClicked === "Fingerprints"){
        //         setIsFingerprintsClicked(!isFingerprintsClicked)
        //         setPrevClicked(evidence)
        //     }
        // }

        if (evidence === "Ghost Writing"){
            setIsGhostWritingClicked(!isGhostWritingClicked)
        }else if(evidence === "Spirit Box"){
            setIsSpiritBoxClicked(!isSpiritBoxClicked)
        }else if(evidence === "Freezing Temperatures"){
            setIsFreezingTempClicked(!isFreezingTempClicked)
        }else if(evidence === "Ghost Orb"){
            setIsGhostOrbClicked(!isGhostOrbClicked)
        }else if(evidence === "EMF 5"){
            setIsEMF5Clicked(!isEMF5Clicked)
        }else if(evidence === "Fingerprints"){
            setIsFingerprintsClicked(!isFingerprintsClicked)
        }

        if(evidenceNumber === "1"){
            console.log("first evidence")
            setFirstEvidenceFound(evidence)
        }else if(evidenceNumber === "2"){
            console.log("second evidence")
            setSecondEvidenceFound(evidence)
        }else if(evidenceNumber === "3"){
            console.log("third evidence")
            setThirdEvidenceFound(evidence)
        }

        console.log(evidence)

    }

    return (
        <div>

            {locked ? 
                (
                    <div className={"parent-card-locked"}>
                        <span className='evidence-number'>Evidence {evidenceNumber}</span>
    
                         <div className="locked">
                            <label className="label">Fill Evidence {parseInt(evidenceNumber)-1}</label>
                        </div>       
                    </div>
                )
                    :
                (
                    <div className={parentCardSize[ghostEvidencesLeft.length.toString()]} onChange={(e) => onChange(e)}>
                        <span className='evidence-number'>Evidence {evidenceNumber}</span>

                        {ghostEvidencesLeft.map((evidence) => (
                            <EvidenceRadioButton evidenceNumber={evidenceNumber} evidenceClicked={buttonMap[evidence]} onChangeFunc={onChange}>{evidence}</EvidenceRadioButton>
                        ))}        
        
                    </div>
                )
            }

            {/* <div className="parent-card" onChange={(e) => onChange(e)}>
                <span className='evidence-number'>Evidence {evidenceNumber}</span>

                <div className={isGhostWritingClicked ? "clicked" : "unclicked"}>
                    <input type="radio" name="evidence" id={"Ghost Writing" + evidenceNumber} value="Ghost Writing" className="radio"/>
                    <label htmlFor={"Ghost Writing" + evidenceNumber} className="label">Ghost Writing</label>
                </div>
                <div className={isSpiritBoxClicked ? "clicked" : "unclicked"}>
                    <input type="radio" name="evidence" id={"Spirit Box" + evidenceNumber} value="Spirit Box" className="radio"/>
                    <label htmlFor={"Spirit Box" + evidenceNumber} className="label">Spirit Box</label>
                </div>
                <div className={isFreezingTempClicked ? "clicked" : "unclicked"}>
                    <input type="radio" name="evidence" id={"Freezing Temperatures" + evidenceNumber} value="Freezing Temperatures" className="radio"/>
                    <label htmlFor={"Freezing Temperatures" + evidenceNumber} className="label">Freezing Temp</label>
                </div>
                <div className={isGhostOrbClicked ? "clicked" : "unclicked"}>
                    <input type="radio" name="evidence" id={"Ghost Orb" + evidenceNumber} value="Ghost Orb" className="radio"/>
                    <label htmlFor={"Ghost Orb" + evidenceNumber} className="label">Ghost Orb</label>
                </div>
                <div className={isEMF5Clicked ? "clicked" : "unclicked"}>
                    <input type="radio" name="evidence" id={"EMF 5" + evidenceNumber} value="EMF 5" className="radio"/>
                    <label htmlFor={"EMF 5" + evidenceNumber} className="label">EMF 5</label>
                </div>
                <div className={isFingerprintsClicked ? "clicked" : "unclicked"}>
                    <input type="radio" name="evidence" id={"Fingerprints" + evidenceNumber} value="Fingerprints" className="radio"/>
                    <label htmlFor={"Fingerprints" + evidenceNumber} className="label">Fingerprints</label>
                </div>
    
            </div> */}
             
        </div>
    )
}

export default EvidencePC
 