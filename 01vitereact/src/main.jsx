import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp () {
  return (
    <div>
      <h1>Cutom App</h1>
    </div>
  )



}

const recatElememt= {

    type :'a',
    props :{
        href: 'https://google.com',
        target:'_blank'
    },

    Children: 'click me to visit gooogle' 
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>
    visit again 
  </a>
)


createRoot(document.getElementById('root')).render(
    anotherElement
)
