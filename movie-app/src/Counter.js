import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



function App() {
  let [counter, setCounter] = useState(0); 
  function incrementHandler(){
    setCounter(counter + 1)
  }

  function decrementHandler(){
    setCounter(counter - 1)
  }
  function resetHandler(){
    setCounter(0)
  }
  return (
    <div className="App">
      <h1 className='title'>React js Counter App</h1>
      <h1 className='counter'>{counter}</h1>

      <button className='btn' onClick={incrementHandler}>Increment</button>
      <button className='btn' onClick={decrementHandler}>Decrement</button>
      <button className='btn' onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default App;
