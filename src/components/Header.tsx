import { useState } from 'react'

export const MainHeader = () => {
  const [variable, setVariable] = useState('blue')
  const [titleVariable, setTitleVariable] = useState('home')
  const handleClick = () => {
    if (variable == 'blue') {
      setTitleVariable('is where')
      setVariable('red')
    } else {
      setTitleVariable('the heart is!')
      setVariable('green')
    }
    console.log(variable)
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
          {titleVariable}
        </h3>
        <h3>add calender</h3>
      </div>
    </>
  )
}
