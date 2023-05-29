import React from 'react';
import './App.css';
import Clock from './components/Clock';


function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
};

let rndInt = randomIntFromInterval(1, 9);

const App = () => {
  return (
    <div className='flex flex-col'>

      <div className={rndInt == 1 ? "bg1" : rndInt == 2 ? "bg2" : rndInt == 3 ? "bg3" : rndInt == 4 ? "bg4" : rndInt == 5 ? "bg5" : rndInt == 6 ? "bg6" : rndInt == 7 ? "bg7" : "bg8"}>
      <div className="container">
        <Clock />
      </div>
    </div>
  </div>
    
  );
}

export default App;