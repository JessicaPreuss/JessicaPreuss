import React from 'react';
import './App.css';
import AdDesigner from './components/AdDesigner';
import Header from './components/Header';
import './components/Header.css'
import './components/AdDesigner.css'
import Votes from './components/Votes';

function App() {
  return (
    <div className="App">
     <Header/>
     <AdDesigner/>
     <Votes/>
    </div>
  );
}

export default App;
