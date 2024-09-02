// consoleCounter address the important issue which give you the better understanding of the useState

import {useState} from "react"

import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  let consoleCounter = 15
  const addValue = ()=>{
    if (counter < 20){
    // counter = counter + 1;
    console.log(`This is consoleCounter: ${++consoleCounter}`)
    // console.log(`before counter: ${counter}`)
    setCounter(++counter)
    console.log(`after counter: ${counter}`)
    }

  }

  const removeValue = () =>{
    if (counter > 0){
    // counter = counter - 1
    console.log(--consoleCounter)
    setCounter(--counter)
    }
  }

  return (
    <>
      <h1>This is Counter {counter}</h1>
         {/*  we didnt use addValue(), because it will directly execute without even clicking the button. */}
        <button onClick={addValue}>Counter Up</button>
        
        <div>
           <br />
        </div>
        <button onClick={removeValue}>Counter Down</button>
      
    </>
  )
}

export default App
