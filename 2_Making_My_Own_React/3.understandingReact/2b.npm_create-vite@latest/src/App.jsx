function App() {

  // Injection variable inside .jsx
  const username = "Aniket"
  // evaluation done here
  
  return (
    // #IMP :fragment also print the comments
    // {}, this is expression
    // {username}, this is evaluated expression.
     <div>
      {/* username here is the final value */}
    <h1>Simple Vite Project {username}</h1>


    {/* <h1>Simple Vite Project {if(username)}</h1> this evaluation cant be done inside expression. */}
    </div>
  )
}

export default App
