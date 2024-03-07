import { useState } from 'react'

export const MainHeader = () => {
  const [variable, setVariable] = useState('blue')
  const handleClick = () => {
    if (variable == 'blue') {
      setVariable('red')
    } else {
      setVariable('green')
    }
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '100px',
          justifyContent: 'center',
        }}
      >
        <h3 style={{ backgroundColor: variable }} onClick={handleClick}>
          home
        </h3>
        <h3>add calender</h3>
      </div>
    </>
  )
}
