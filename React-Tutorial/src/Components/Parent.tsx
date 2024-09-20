import React,{useState} from 'react'
import Child from './Child'
export default function Parent() {
    const [count,setCount] = useState(0);
  return (
    <div>
      <h1>Parent , Count : {count}</h1>
      <button onClick={() => setCount(count+1)}>+</button>
      <Child 
      count ={count}
      username = "John Smith"
       />
    </div>
  )
}
