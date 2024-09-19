import React,{ChangeEvent,MouseEvent} from 'react';
import './App.css';

function App() {
  const handleClick = (e : MouseEvent<HTMLButtonElement>) => {
    console.log('Hi',e.target);
  }

  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    console.log('Handle Change ',e.target.value);
  }

  const handleParamsClick = (username:string,e : MouseEvent<HTMLButtonElement>) => {
    console.log(`Hello, ${username}`,e.target);
  }
  return (
    <>
    <button onClick={handleClick}>Click me!</button>
    <hr/>
    <input onChange={handleChange}></input>
    <hr/>
    <button onClick={(e) => handleParamsClick('Toe Toe Aung',e)}> ParamTest </button>
    </>
  );
}

export default App;
