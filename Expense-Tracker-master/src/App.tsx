import React from 'react';
import { Header } from './Components/Header';
import { GlobalProvider } from './Context API/Context';
import './Style/style.css'
import './Style/income.css'
import './Style/history.css'
import { BrowserRouter as Router, Link} from 'react-router-dom'
import { Routes } from "./Routes/Routes";
    
function App() {
  return (
    <GlobalProvider>
    <div className="App">
      <Header/> 
      <div className="container">
      <Router>
        <Link to={'Balance'}>Balance</Link>
        <Link to={'History'}>History</Link>
        <Link to={'Income'}>Income</Link>
        <Link to={'NewTransation'}>NewTransation</Link> 
        <Routes/>
        </Router> 
      </div>
    </div>
    </GlobalProvider>
  );
}
    
export default App;
