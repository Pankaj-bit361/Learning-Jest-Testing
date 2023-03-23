import React, { useState } from 'react'

const Counter = () => {
const [count,setcount]=useState(0)

const handleadd=()=>{
    setcount((prev)=>prev+1)
}
  return (
    <div>
      <h2 data-testid="counter">Counter:{count}</h2>
      <button data-testid="add-button" onClick={handleadd}>ADD</button>
    </div>
  )
}

export default Counter
