import React, {useState, useContext, useEffect} from 'react'
import './EvidenceMobile.css'
import {EvidenceContext} from './../../EvidenceContext'
import ghostDatabase from './../../GhostsDatabase'
import EvidenceRadioButtonMobile from './EvidenceRadioButtonMobile'
import EvidenceRadioButton from './EvidenceRadioButton'

 function EvidenceMobile({evidenceNumber, locked}) {
    
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
                evidencesLeft = evidencesLeft.concat(ghostLeft[i]['evidence'])
            }
            let result = Array.from(new Set(evidencesLeft)).filter((evi) => (evi!==firstEvidenceFound && evi!==secondEvidenceFound))
            setGhostEvidencesLeft(result)
            console.log("IN MOBILE 1")
            console.log(result)

        }else if (firstEvidenceFound.length>0 && evidenceNumber==="2"){
            console.log("IN MOBILE 2")
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
                    <div className="parent-card-mobile-locked">
                        <span className='evidence-number-mobile'>Evidence {evidenceNumber}</span>     

                        <div className="evidence-lalagyan-mobile-locked">
                            <span className="label-mobile-locked">Fill Evidence {parseInt(evidenceNumber)-1}</span>
                        </div>
                    </div>
                ) 
                    :
                (
                    <div className="parent-card-mobile">
                        <span className='evidence-number-mobile'>Evidence {evidenceNumber}</span>     
        
                        <div className="evidence-lalagyan-mobile">
        
                            {ghostEvidencesLeft.map((evidence) => (
                                <EvidenceRadioButtonMobile evidenceNumber={evidenceNumber} evidenceClicked={buttonMap[evidence]} onChangeFunc={onChange}>{evidence}</EvidenceRadioButtonMobile>
                            ))}   

                            {/* <EvidenceRadioButtonMobile evidenceNumber={evidenceNumber} evidenceClicked={isGhostWritingClicked} onChangeFunc={onChange}>Ghost Writing</EvidenceRadioButtonMobile>
                            <EvidenceRadioButtonMobile evidenceNumber={evidenceNumber} evidenceClicked={isSpiritBoxClicked} onChangeFunc={onChange}>Spirit Box</EvidenceRadioButtonMobile>
                            <EvidenceRadioButtonMobile evidenceNumber={evidenceNumber} evidenceClicked={isFreezingTempClicked} onChangeFunc={onChange}>Freezing Temperatures</EvidenceRadioButtonMobile>
                            <EvidenceRadioButtonMobile evidenceNumber={evidenceNumber} evidenceClicked={isGhostOrbClicked} onChangeFunc={onChange}>Ghost Orb</EvidenceRadioButtonMobile>
                            <EvidenceRadioButtonMobile evidenceNumber={evidenceNumber} evidenceClicked={isEMF5Clicked} onChangeFunc={onChange}>EMF 5</EvidenceRadioButtonMobile>
                            <EvidenceRadioButtonMobile evidenceNumber={evidenceNumber} evidenceClicked={isFingerprintsClicked} onChangeFunc={onChange}>Fingerprints</EvidenceRadioButtonMobile> */}

                            {/* <div className={isGhostWritingClicked ?"clicked-mobile" : "unclicked-mobile"} onChange={(e) => (onChange(e))}>
                                <input type="radio" name="evidence-mobile" id={"Ghost Writing"+evidenceNumber+"mobile"} value="Ghost Writing" className="radio"/>
                                <label htmlFor={"Ghost Writing"+evidenceNumber+"mobile"} className="label-mobile">Ghost Writing</label>
                            </div>
                            <div className={isSpiritBoxClicked ?"clicked-mobile" : "unclicked-mobile"} onChange={(e) => (onChange(e))}>
                                <input type="radio" name="evidence-mobile" id={"Spirit Box"+evidenceNumber+"mobile"} value="Spirit Box" className="radio"/>
                                <label htmlFor={"Spirit Box"+evidenceNumber+"mobile"} className="label-mobile">Spirit Box</label>
                            </div>
                            <div className={isFreezingTempClicked ?"clicked-mobile" : "unclicked-mobile"} onChange={(e) => (onChange(e))}>
                                <input type="radio" name="evidence-mobile" id={"Freezing Temperatures"+evidenceNumber+"mobile"} value="Freezing Temperatures" className="radio"/>
                                <label htmlFor={"Freezing Temperatures"+evidenceNumber+"mobile"} className="label-mobile">Freezing Temp</label>
                            </div>
                            <div className={isGhostOrbClicked ?"clicked-mobile" : "unclicked-mobile"} onChange={(e) => (onChange(e))}>
                                <input type="radio" name="evidence-mobile" id={"Ghost Orb"+evidenceNumber+"mobile"} value="Ghost Orb" className="radio"/>
                                <label htmlFor={"Ghost Orb"+evidenceNumber+"mobile"} className="label-mobile">Ghost Orb</label>
                            </div>
                            <div className={isEMF5Clicked ?"clicked-mobile" : "unclicked-mobile"} onChange={(e) => (onChange(e))}>
                                <input type="radio" name="evidence-mobile" id={"EMF 5"+evidenceNumber+"mobile"} value="EMF 5" className="radio"/>
                                <label htmlFor={"EMF 5"+evidenceNumber+"mobile"} className="label-mobile">EMF 5</label>
                            </div>
                            <div className={isFingerprintsClicked ?"clicked-mobile" : "unclicked-mobile"} onChange={(e) => (onChange(e))}>
                                <input type="radio" name="evidence-mobile" id={"Fingerprints"+evidenceNumber+"mobile"} value="Fingerprints" className="radio"/>
                                <label htmlFor={"Fingerprints"+evidenceNumber+"mobile"} className="label-mobile">Fingerprints</label>
                            </div> */}
                        
                        </div>
                    </div>
                )
            }
        </div>
     )
 }
 
 export default EvidenceMobile
 