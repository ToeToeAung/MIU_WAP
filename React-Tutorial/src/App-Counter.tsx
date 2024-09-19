import React,{useState} from 'react';
import './App.css';

function App() {
  let [count,setCount] = useState(0)
  const increment = () => {
    setCount( prev => prev+1);
  }

  const decrement = () => {
    setCount(count - 1);
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <hr/>  
      <div>
      <button onClick={increment}>+</button>       
      <button onClick={decrement}>-</button>
      </div>
     
    </div>
  );
}

export default App;
