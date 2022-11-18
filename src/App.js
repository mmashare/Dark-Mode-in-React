import React from 'react'
import styles from "./App.css"
import DarkMode from './darkmode'
const App = () => {
  return (
    <div className={styles.themedark}>
     <DarkMode/> 
      </div>
  )
}

export default App