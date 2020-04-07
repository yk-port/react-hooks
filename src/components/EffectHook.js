import React, { useState, useEffect } from 'react'

function EffectHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `クリック数：${count} 回`;
  })

  return (
    <div>
      <p>クリック数：{count}回</p>
      <button onClick={() => setCount(count + 1)}>add count</button>
    </div>
  )
}

export default EffectHook
