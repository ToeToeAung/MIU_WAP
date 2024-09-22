import React from 'react'
type propsType = {
  count : number;
  username :string;
}

export default function Child(props : propsType) {
  const {count,username} = props;
  return (
    <div>
      <h1>Child , Count : {count} ,User Name : {username}</h1>
    </div>
  )
}
