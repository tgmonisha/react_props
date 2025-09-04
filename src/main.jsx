import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function Names(){
    
    return(
      <>
         <App name="Haarika" native="Tiruttani" />
         <App name="Monisha" native="Tirupati" />
         <App name="Jesvith" native="Chennai"/>
         <App name="Yuvan" native="Kadapa"/>
         <App name="Sireesha" native="Chittoor"/>
      </>
      
    );
}
createRoot(document.getElementById('root')).render(<Names />);
