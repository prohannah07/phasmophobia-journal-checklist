import React, {useState, createContext} from 'react'

export const EvidenceContext = createContext();

export const EvidenceProvider = (props) => {

    const[firstEvidenceFound, setFirstEvidenceFound] = useState("")
    const[secondEvidenceFound, setSecondEvidenceFound] = useState("")
    const[thirdEvidenceFound, setThirdEvidenceFound] = useState("")

    const[firstPrevClicked, setFirstPrevClicked] = useState("")
    const[secondPrevClicked, setSecondFirstPrevClicked] = useState("")
    const[thirdPrevClicked, setThirdPrevClicked] = useState("")

    const [isDisplayTable, setIsDisplayTable] = useState(true)


    return(
        <EvidenceContext.Provider 
            value={{evidence1:[firstEvidenceFound, setFirstEvidenceFound], 
                evidence2:[secondEvidenceFound, setSecondEvidenceFound], 
                evidence3:[thirdEvidenceFound, setThirdEvidenceFound],
                prev1 : [firstPrevClicked, setFirstPrevClicked],
                prev2 : [secondPrevClicked, setSecondFirstPrevClicked],
                prev3 : [thirdPrevClicked, setThirdPrevClicked],
                displayTable: [isDisplayTable, setIsDisplayTable]
            }}
        >
            {props.children}
        </EvidenceContext.Provider>
    );
}