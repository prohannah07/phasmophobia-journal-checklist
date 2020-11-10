import React from 'react'
import './EvidenceMobile.css'

function EvidenceRadioButtonMobile({ evidenceNumber, evidenceClicked, children, onChangeFunc}) {
    return (
        <div className={evidenceClicked ?"clicked-mobile" : "unclicked-mobile"} onChange={(e) => (onChangeFunc(e))}>
            <input type="radio" name="evidence-mobile" id={children+evidenceNumber+"mobile"} value={children} className="radio"/>
            <label htmlFor={children+evidenceNumber+"mobile"} className="label-mobile">{children==="Freezing Temperatures" ? "Freezing Temp" : children}</label>
        </div>
    )
}

export default EvidenceRadioButtonMobile
