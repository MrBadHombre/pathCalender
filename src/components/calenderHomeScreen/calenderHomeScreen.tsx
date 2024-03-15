import styles from './calenderHomeScreen.module.css'

export const CalenderHomeScreen = () => {
  let calenderSpaces: number[] = []
  const setSquares = () => {
    for (let i = 0; i < 30; i++) {
      calenderSpaces.push(i)
    }
    console.log(calenderSpaces)
  }

  return (
    <>
      <button onClick={() => setSquares}>setSquares</button>
      <div className={styles.calenderGrid}>
        {calenderSpaces.map((space) => {
          return <div style={{ color: 'white' }}>{space}</div>
        })}
      </div>
    </>
  )
}
