<div className="parent-card" onChange={(e) => onChange(e)}>
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

{/* <div className="locked">
    <input type="radio" name="evidence" id={"Fingerprints" + evidenceNumber} value="Fingerprints" className="radio"/>
    <label htmlFor={"Fingerprints" + evidenceNumber} className="label">Fingerprints</label>
</div> */}      
</div>