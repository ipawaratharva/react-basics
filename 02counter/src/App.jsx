import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

let [counter,setcounter]=useState(15)

  const addValue= ()=> {
    console.log('clicked ',counter); 'clicked' |15 
    counter =counter +1
    setcounter(counter)
  }

  let removeValue = () => {
    setcounter(counter-1)
  }
 

  return (
    <>
      <h1>chai aur react </h1>
      <h2>counter value:{counter}</h2>

      <button 
      onClick={addValue}
        
      >add value</button>
      <br/>
      <button
      onClick={removeValue}> remove value </button>
     </>
  )
}

export default App
