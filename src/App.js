import './App.css';
import {EvidenceProvider} from './EvidenceContext'
import DisplayGhostCards from './components/ghost-card/DisplayGhostCards'
import DisplayEvidencePC from './components/found-evidences/DisplayEvidencePC'
import Footer from './components/Footer'

function App() {
  return (
    <EvidenceProvider>
      <div className="App">
        
        <div className="content-wrap">
          <h1 className="website-title">PHASMOPHOBIA JOURNAL FOR DUMMIES ╮(￣ω￣;)╭</h1>
          
          <DisplayEvidencePC/>
          <DisplayGhostCards/>
        </div>
        

        <Footer/>
      </div>
    </EvidenceProvider>
  );
}

export default App;
