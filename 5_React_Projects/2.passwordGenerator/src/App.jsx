// Relearn it in future.
import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 transform transition-transform duration-300 hover:scale-105 active:scale-95'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App



// "onChange" is a React event handler that listens for changes in the value of an input field. It triggers whenever the user types something into an input or selects a new value from a dropdown, etc.

// "e (short for event)" is the event object that is automatically passed to the event handler by React. It contains information about the event, such as the type of event and the element that triggered it.

// "e.target" refers to the DOM element that triggered the event. In this case, it would be the input element (e.g., a text box) where the user is typing.

// "e.target.value" retrieves the current value of the input element. For instance, if the user types "Hello" into a text box, e.target.value will be "Hello".





// My error full code :/

// import { useState, useCallback, useEffect } from "react"

// function App() {
//   const [length, setLength] = useState(8)
//   const [numAllowed, setNumAllowed] = useState(false)
//   const [charAllowed, setCharAllowed] = useState(false)
//   const [password, setPassword] = useState("")

//   // useCallback(function definition, [dependencies,...])
//   // useCallback is a React Hook that lets you cache a function definition between re-renders.
//   const passwordGenerator = useCallback(() => {
//     let pass = ""
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

//     if (numAllowed) str += "0123456789"
//     if (charAllowed) str += "!@#$%^&*()-_=+[]{}?"

//     for (let i = 1; i <= length; i++) {
//       const char = Math.floor(Math.random() * str.length + 1)
//       console.log(char)
//       pass += str.charAt(char)
//     }
//     setPassword(pass)

//   }, [length, numAllowed, charAllowed])

//   useEffect(()=>{
//     passwordGenerator()
//   },[length, numAllowed, charAllowed,passwordGenerator])


//   return (
//     <div className="text-white py-4">
//   <div className="bg-gray-700 w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500">
//     <h1 className="text-3xl font-bold my-4 py-1">
//       Password Generator
//     </h1>

//     <div className="flex shadow-lg overflow-hidden mb-4">
//       <input
//         type="text"
//         value={password}
//         className="outline-none w-full py-1 px-3"
//         placeholder="Password"
//         readOnly
//       />
//       <button className="bg-orange-600 text-white px-2 py-1 transform transition-transform duration-300 hover:scale-105 active:scale-95">Copy</button>
//     </div>

//     <div className="flex items-center gap-x-2 mb-4">
//       <input
//         type="range"
//         min={1}
//         max={20}
//         value={length}
//         className="cursor-pointer"
//         onChange={(e) => setLength(e.target.value)}
//       />
//       <label>Length: {length}</label>
//     </div>

//     <div className="flex items-center gap-x-3 my-5">
//       <input
//         type="checkbox"
//         id="numberInput"
//         defaultChecked={numAllowed}
//         className="cursor-pointer"
//         onChange={() => setCharAllowed((prev) => !prev)}
//       />
//       <label htmlFor="numberInput" className="cursor-pointer">Number</label>
//     </div>

//     <div className="flex items-center gap-x-3 my-5">
//       <input
//         type="checkbox"
//         id="characterInput"
//         defaultChecked={charAllowed}
//         className="cursor-pointer"
//         onChange={() => setNumAllowed((prev) => !prev)}
//       />
//       <label htmlFor="characterInput" className="cursor-pointer">Character</label>
//     </div>
//   </div>
// </div>

//   )
// }

// export default App


