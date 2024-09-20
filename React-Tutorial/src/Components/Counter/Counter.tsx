import React,{useState,useEffect} from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0);

    useEffect(() => { const id = setInterval(() => { 
        setCounter(counter + 1); }
        , 1000); 
    return () => { 
        clearInterval(id) 
    } }, []);

  return (
    <div>
      {counter}
    </div>
  )
}
