import './App.css'
import Card from './components/Card.jsx'
function App() {
  const ObjProps = {
    myName: "variable prop inside App.jsx"
  }
  const iAmVarible = "Hello I am indirect variable"

  const myArray = ["aniket", "array", "indirect"]
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-green-700 text-black p-2 rounded-xl">
        TailwindCSS
      </h1>
      <Card objectDirectProps={{ myName: "I am in App.jsx, card tag" }} objectIndirectProps={ObjProps} variableDirectProps="I am direct string inside prop variable."
        variableIndirectProps={iAmVarible}
        arrayDirectProps={[1, 2, 3]}
        arrayIndirectProps={myArray[0]} />

      <Card variableDirectProps="I am direct string inside prop variable."
        // variableIndirectProps={iAmVarible}
        // arrayDirectProps={[1, 2, 3]}
        // arrayIndirectProps={myArray[1]} 
        />

    </>
  )
}

export default App
