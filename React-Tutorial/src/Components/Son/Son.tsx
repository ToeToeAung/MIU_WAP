import React ,{ReactNode} from 'react'

export default function Son({children} : {children : ReactNode}) {
  return (
    <div>        
       <h1> This is son </h1>
       <p className='ptag'>{children}</p> 
    </div>
  )
}
