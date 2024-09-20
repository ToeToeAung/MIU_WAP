import React from 'react'
type propsType = {
  count : number;
}

export default function Child(props : propsType) {
  const {count} = props;
  return (
    <div>
      <h1>Child , Count : {count}</h1>
    </div>
  )
}
