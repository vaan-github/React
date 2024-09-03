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
    if (counter > 0){ // Issue : this type of counter still not able to fix the -ve value issue.
    // counter = counter - 1
    console.log(--consoleCounter)
    // setCounter(--counter)
    // Interview Question
     // Actual question is what will happen if the setCounter is called like this.
     // the expected code by programmer
    //  setCounter(counter - 1)
    //  setCounter(counter - 1)
    //  setCounter(counter - 1)
    //  setCounter(counter - 1) // even if we call the counter 4 times it will goes down by 1 only.
     
     // ANSWER : METHOD 1
     
     // Math.max is used to fix the 
    //  setCounter(prevCounter => Math.max(prevCounter - 1 ,0))
    //  setCounter(prevCounter => Math.max(prevCounter - 1 ,0))
    //  setCounter(prevCounter => Math.max(prevCounter - 1 ,0))
    
    // setCounter(prevCounter => prevCounter - 1)
    // setCounter(prevCounter => prevCounter - 1)
    // setCounter(prevCounter => prevCounter - 1)
    //  setCounter(prevCounter => Math.max(prevCounter - 1 ,0))
     
     //
     // ye method se interview question hi crack ho jayega. LOL.
    // setCounter(--counter)
    // setCounter(--counter)
    // setCounter(--counter)
    // setCounter(--counter)
   
    // this code ensure that the counter 
  // if (counter - 1 >= 0) setCounter(--counter);
  // if (counter - 1 >= 0) setCounter(--counter);
  // if (counter - 1 >= 0) setCounter(--counter);

   setCounter(--counter);
   setCounter(--counter);
   setCounter(--counter);
  if (counter - 1  >= 0) setCounter(--counter);
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
