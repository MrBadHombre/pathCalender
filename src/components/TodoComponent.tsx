import { useState } from 'react'

const TodoComponent = () => {
  const [addedNumbers, setAddedNumbers] = useState(0)
  const addNumbers = () => {
    const newNumbers = addedNumbers + 1
    setAddedNumbers(newNumbers)
  }

  return (
    <>
      <h1>Todos</h1>
      <button onClick={() => addNumbers()}>add numbers</button>
      <div>{addedNumbers}</div>
    </>
  )
}

export default TodoComponent
