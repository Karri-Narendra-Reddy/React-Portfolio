import React from 'react';

import './App.css';
import SidePanel from './components/pages/general/sidepanel';
import { BrowserRouter as Router,Route, Link, Routes} from 'react-router-dom';
import About from './components/pages/About Us/About';
import Contact from './components/pages/contact/Contact';
import Service from './components/pages/Service/service';
import Portfolio from './components/pages/portfolio/Portfolio';
import Homepage from './components/pages/Home/Homepage';

const App: React.FC= () =>{
  return (
    <Router>
       <div className="main-container">
        <SidePanel />
        <div className="main-content">
          <Homepage />
          <Routes>
          <Route path='/About' Component={About}></Route>
          <Route path='/Services' Component={Service}></Route>
          <Route path='/Portfolio' Component={Portfolio}></Route>
          <Route path='/Contact' Component={Contact}></Route>
          
          </Routes>
        </div>
    </div>
    </Router>

    
  );
}

export default App;
