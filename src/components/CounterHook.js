import React, { useState } from 'react'

function CounterHook() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={incrementCount}>count up</button>
    </div>
  )
}

export default CounterHook
