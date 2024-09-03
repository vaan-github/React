import {useState} from "react"
function App() {
  let [color, setColor] = useState("#212121")

// onClick ==> wants function 
// here setColor is a function
// but setColor() is a fuction return value.

  return (
    
    <div className="h-screen duration-1000" style={{backgroundColor : color}}>

    <div className="bg-slate-600 gap-3 fixed flex flex-wrap bottom-10 inset-x-0 px-2 py-2 rounded-xl justify-self-center">

      <div className="shadow-lg bg-white px-2 py-1 rounded-xl">
        <button className="px-3 py-1 rounded-full bg-red-600 text-white shadow-lg transform transition-transform duration-300 hover:scale-105 active:scale-95" onClick={()=>{setColor("red")}}>RED</button>  
      </div>
      
      <div className="shadow-lg bg-white px-2 py-1 rounded-xl">
        <button className="px-3 py-1 rounded-full bg-green-600 text-white shadow-lg transform transition-transform duration-300 hover:scale-105 active:scale-95" onClick={()=>{setColor("green")}}>GREEN</button>  
      </div>

      <div className="shadow-lg bg-white px-2 py-1 rounded-xl">
        <button className="px-3 py-1 rounded-full bg-blue-600 text-white shadow-lg transform transition-transform duration-300 hover:scale-105 active:scale-95" onClick={()=>{setColor("blue")}}>BLUE</button>  
      </div>

      <div className="shadow-lg bg-white px-2 py-1 rounded-xl">
        <button className="px-3 py-1 rounded-full bg-purple-600 text-white shadow-lg transform transition-transform duration-300 hover:scale-105 active:scale-95" onClick={()=>{setColor("purple")}} >PURPLE</button>  
      </div>

      <div className="shadow-lg bg-white px-2 py-1 rounded-xl">
        <button className="px-3 py-1 rounded-full bg-orange-600 text-white shadow-lg transform transition-transform duration-300 hover:scale-105 active:scale-95" onClick={()=>{setColor("orange")}}>ORANGE</button>  
      </div>

      <div className="shadow-lg bg-white px-2 py-1 rounded-xl">
        <button className="px-3 py-1 rounded-full bg-indigo-600 text-white shadow-lg transform transition-transform duration-300 hover:scale-105 active:scale-95" onClick={()=>{setColor("indigo")}}>INDIGO</button>  
      </div>

    </div>

    </div>
    
  )
}

export default App
