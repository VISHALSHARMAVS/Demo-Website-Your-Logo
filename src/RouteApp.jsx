import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import Header from "./components/Header/Header"
// import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Root from './Root'
import About from './components/About/About'
import Contact from './components/Contect/contact'
import User from './components/User/User'
import Github from './components/Github/Github'
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Root/>,
//     children :  [
//       {
//         path : "",
//         element :<Home/>
//       },
//       {
//         path : "about",
//         element : <About/>
//       },
//       {
//         path : "contact",
//         element : <Contact/>
//       },

//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Root/>}>
      <Route path='' element ={<Home/>}></Route>
      <Route path='about' element= {<About/>}></Route>
      <Route path='contact' element= {<Contact/>}></Route>
      <Route path='user/:userid' element= {<User/>}></Route>
      <Route path='github' element={<Github/>}></Route>
    </Route>
  )
)

function RouteApp() {


  return (
   <React.StrictMode>
      <RouterProvider router={router}/>
   </React.StrictMode>
      
     
 
  )
}

export default RouteApp;
