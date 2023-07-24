import './App.css';
import { useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';

// here we are importing the reducers 
import { increment,decrement,incrementByAmount } from './app/counterSlices';

function App() {


  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  // const [counter,setCounter ] = useState(0);

  const incrementCounter = () => {
// setCounter((prevCounter) => prevCounter + 1 );
dispatch(increment());
  };

  const decrementCounter = () => {
// setCounter((prevCounter) => prevCounter - 1);
dispatch(decrement());    
  };

  const incrementByFive = () => {
        dispatch(incrementByAmount(5));    
      };
  
  return (
            <div className="app">
      
      <div> COUNTER = {counter}</div>

      <button onClick={incrementCounter} >+</button>
  
      <button onClick={decrementCounter}>-</button>

      <button onClick={incrementByFive}>+5</button>


            </div>
  );
}

export default App;
