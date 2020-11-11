import React, {useContext, useState} from 'react'
import EvidencePC from './EvidencePC'
import './DisplayEvidencePC.css'
import {EvidenceContext} from './../../EvidenceContext'
import ResetButton from './../ResetButton'
import DisplayGhostTable from './../ghost-table/DisplayGhostTable'
import ShowTableButton from './../ghost-table/ShowTableButton'
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

function DisplayEvidencePC() {
    const {evidence1, evidence2, evidence3, displayTable} = useContext(EvidenceContext)
    const[firstEvidenceFound, setFirstEvidenceFound] = evidence1
    const[secondEvidenceFound, setSecondEvidenceFound] = evidence2
    const[thirdEvidenceFound, setThirdEvidenceFound] = evidence3
    const [isDisplayTable, setIsDisplayTable] = displayTable

    const [isScreenWideEnuf, setIsScreenWideEnuf] = useState(true)

    const checkScreenSize = () => {
        if(window.innerWidth <= 750) {
            setIsScreenWideEnuf(false)
        }else{
            setIsScreenWideEnuf(true)
        }
    }

    window.addEventListener('resize', checkScreenSize)

    return (
        <div className="pinaka-labas-lalagyan">
            <div className="pinaka-lalagyan">
                <div className="evidence-lalagyan">
                    <EvidencePC evidenceNumber="1" locked={false}/>
                    <EvidencePC evidenceNumber="2" locked={firstEvidenceFound.length>0 ? false : true}/>
                    <EvidencePC evidenceNumber="3" locked={secondEvidenceFound.length>0 ? false : true}/>
                </div>

                <div className="reset-lalagyan">
                    <ResetButton>Reset All</ResetButton>
                    {isScreenWideEnuf ? <ShowTableButton/> : null}
                </div>
            </div>
             
            {isScreenWideEnuf ? (isDisplayTable ? <DisplayGhostTable/> : null) : null}

            {/* {isBrowser ? (isDisplayTable ? <DisplayGhostTable/> : null) : null} */}
            
        </div>
    )
}

export default DisplayEvidencePC
