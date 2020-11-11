import React, {useState, useContext, useEffect} from 'react'
import {EvidenceContext} from './../../EvidenceContext'
import './ShowTableButton.css'

const ShowTableButton = () => {

    const {displayTable} = useContext(EvidenceContext)
    const [isDisplayTable, setIsDisplayTable] = displayTable

    const isDisplayTableFunc = () => {
        setIsDisplayTable(!isDisplayTable)
    }

    return (
        <button className={isDisplayTable? "display-table-button-no" : "display-table-button-yes"} onClick={isDisplayTableFunc}>{isDisplayTable?"no":"yes"} table</button>
    )
}

export default ShowTableButton
