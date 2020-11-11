import React from 'react'

function EvidenceRadioButton({evidenceNumber, evidenceClicked, children, onChangeFunc}) {

    return (
        <div className={evidenceClicked ? "clicked" : "unclicked"} onChange={(e) => onChangeFunc(e)}>
            <input type="radio" name="evidence" id={children + evidenceNumber} value={children} className="radio"/>
            <label htmlFor={children + evidenceNumber} className="label">{children==="Freezing Temperatures"?"Freezing Temp":children}</label>
        </div>
    )
}

export default EvidenceRadioButton
