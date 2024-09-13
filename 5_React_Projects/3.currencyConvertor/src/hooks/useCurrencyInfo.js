// CUSTOM REACT HOOK

// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json

import {useState, useEffect} from "react"

function useCurrencyInfo(currency){
     // To save the fetch json data in the variable which doesnt get effected during DOM re-rendering.

     const [data, setData] = useState({})

    // hook which invoke when the lifecycle event trigger or when we mount the component?
    // Ans : useEffect

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json()) // 'res' is automatically provided as the result of the resolved promise
        .then((res) => setData(res[currency])) // we can access objects through []
    },[currency])
    console.log(data)
    return data;
}

export default useCurrencyInfo // This will return the whole function without executing.