import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"

import  Layout  from "./Layout.jsx" // Layout can be named anything // this is a default export.
import {Home, About,  Contact} from "./components/Index.js" // Home can't  be named anything // this is a named export.
import User from './components/User/User.jsx'
import Github ,{ githubInfoLoader } from './components/Github/Github.jsx'

// 1st Method for react Routing.
// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <Layout/>,
//     children : [
//       {
//         path : "",
//         element : <Home/>
//       }, {
//         path : "about",
//         element : <About/>
//       }, {
//         path : "contact",
//         element : <Contact/>
//       }
//     ]
//   }
// ])

// 2nd Method for react Routing.
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route 
      loader={githubInfoLoader}
      path= 'github' element={<Github/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>,
)
