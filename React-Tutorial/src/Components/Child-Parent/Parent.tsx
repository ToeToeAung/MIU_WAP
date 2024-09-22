import React from 'react'
import Child from './Child' 

export default function Parent() {
    const getData = (data : number) => console.log(data)
    const getContent = (data :string) => console.log(data)
  return (
    <div>
      <h1> Parent :</h1>
      <Child onData={getData} onContent={getContent}></Child>
    </div>
  )
}
