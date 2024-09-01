// ### 
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// import {jsx as _jsx} from 'react/jsx-runtime.js' // alternative for myReactElement

function MyApp(){
    return (
    <h1>hello</h1>)
}

// this wont work 
const reactElement = { // this is not the actaul terminology of the react.
    type: 'a',
    property : {
        href: 'https://www.google.com',
        target: '_blank'
    },
    childNodes: 'Please click me for google' // we hardcoded childNode as text node, we can also add another tags inside it.
} 

const anotherElement = (
    <h1>Another Element</h1>
)

// create element in react using React Library
// React.createElement('tag',{
    //  attributeName : "attributeValue"
// }, ChildNode)
const myReactElement = React.createElement('a',{
    href:"https://www.google.com",
    target: "_blank"
}, 'Click me to visit google'
,anotherElement)

createRoot(document.getElementById('root')).render(

    // inside fragment you wont able to call fuunction
    <>
    <App />
    {myReactElement}
    </>
    // myApp
    // myApp()

     


    // <MyApp/> // it will work
    // MyApp()  // it will work

    /* reactElement */ // Error: Objects are not valid as a React child (found: object with keys {type, property, childNodes}). If you meant to render a collection of children, use an array instead.

    // anotherElement // converted to object
    // <anotherElement/> // it wont work

    // actual way of creating element in react.

    // myReactElement // THIS WILL WORK


)
