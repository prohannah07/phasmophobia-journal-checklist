import React from 'react'
import './App.css';
import {EvidenceProvider} from './EvidenceContext'
import DisplayGhostCards from './components/ghost-card/DisplayGhostCards'
import DisplayEvidencePC from './components/found-evidences/DisplayEvidencePC'
import DisplayEvidenceMobile from './components/found-evidences/DisplayEvidenceMobile'
import Footer from './components/Footer'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


function App() {
      
  
  return (
    <EvidenceProvider>
      <div className="App">
        
        <div className="content-wrap">
          <h1 className={isMobile ? "website-title-mobile" : "website-title"}>PHASMOPHOBIA JOURNAL FOR DUMMIES ╮(￣ω￣;)╭</h1>

          {/* <div className="tupperware"> */}
            {isMobile ? <DisplayEvidenceMobile/> : <DisplayEvidencePC/>}
            <DisplayGhostCards/>
          {/* </div> */}
          
        </div>
        

        <Footer/>
      </div>
    </EvidenceProvider>
  );
}

export default App;
