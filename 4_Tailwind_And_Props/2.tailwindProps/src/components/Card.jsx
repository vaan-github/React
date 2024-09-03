
/* eslint-disable react/prop-types */

// function Card(props){
function Card({variableDirectProps, arrayIndirectProps = "Default Value"}){
    // props = {name: "I am inside Card.js"}
    // console.log(props);
    console.log(arrayIndirectProps)
    console.log(variableDirectProps);
    // console.log(props.variableDirectProps);
    
    return(
      <>
    <div className="relative h-[400px] w-[300px] rounded-md">
    <img
      src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      alt="AirMax Pro"
      className="z-0 h-full w-full rounded-md object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div className="absolute bottom-4 left-4 text-left">

      {/* <h1 className="text-lg font-semibold text-white">{arrayIndirectProps || "This prop is not passed"}</h1>  // piping the default value here is not readable*/}

      <h1 className="text-lg font-semibold text-white">{arrayIndirectProps || "This prop is not passed"}</h1>
      <p className="mt-2 text-sm text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
      </p>
      <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
        {variableDirectProps} &rarr;
      </button>
    </div>
  </div>
  </>
    )
}

export default Card