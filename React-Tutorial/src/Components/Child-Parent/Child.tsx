import React, { ChangeEvent, useState } from 'react'
type proTypes = {
    onData: (data: number) => void;
    onContent: (data: string) => void;
}

export default function Child({onData,onContent}: proTypes) {
    const [count,setCount] = useState(0)
    const [content,setContent] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        const value =e.target.value;
        setContent(value);
    }

  return (
    <div>
      <h1> Child {count} ,{content}</h1>
      <button onClick={() => setCount(prev => prev +1)}>+1</button>
      
      <input value={content} onChange={handleChange}></input>

      <br>
      </br>
      <hr></hr>
      <button onClick={() => {onData(count); onContent(content)}}> Send</button>   
    </div>
  )
}
