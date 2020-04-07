import React, { useState, useEffect } from 'react'

function MouseEventEffect() {
  console.log('MouseEventEffect発火');
  const [ x, setX ] = useState(0);
  const [ y, setY ] = useState(0);
  
  const getMousePosition = e => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log('useEffect発火');
    window.addEventListener('mouseover', getMousePosition);
    return () => {
      window.removeEventListener('mouseover', getMousePosition);
    }
  }, []);

  return (
    <div>
      <ul>
        <li>x座標: {x}</li>
        <li>y座標: {y}</li>
      </ul>
    </div>
  )
}

export default MouseEventEffect
