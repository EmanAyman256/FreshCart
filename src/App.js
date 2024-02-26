import React, { useContext, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Home/Home'
import Categories from './Categories/Categories'
import Products from './Products/Products'
import Wishlist from './Wishlist/Wishlist'
import Cart from './Cart/Cart'
import Login from './Login/Login'
import Register from './Register/Register'
import Notfound from './Notfound/Notfound'
import ForgetPassword from './ForgetPassword/ForgetPassword'
import ResetPassword from './ResetPassword/ResetPassword'
import { UserContext, UserContextProvider } from './Context/userContext'
import Guard from './ProtectRouting/Guard'

export default function App() {




  let Routers=createBrowserRouter([
    {path:"",element:<Layout></Layout>,children:[
      {path:"home",element:<Guard><Home></Home></Guard>},
      {path:"categories",element:<Guard><Categories></Categories></Guard>},
      {path:"Products",element:<Guard><Products></Products></Guard>},
      {path:"Wishlist",element:<Guard><Wishlist></Wishlist></Guard>},
      {path:"cart",element:<Guard><Cart></Cart></Guard>},
      {path:"Login",element:<Login></Login>},
      {path:"ForgetPassword",element:<ForgetPassword></ForgetPassword>},
      {path:"resetpass",element:<ResetPassword></ResetPassword>},
      {index:true,element:<Register></Register>},
      {path:"*",element:<Notfound></Notfound>},

    ]}
  ])
  let {setUserToken}=useContext(UserContext)
  useEffect(()=>
  {
    if(localStorage.getItem("userToken")!=null)
    {
      setUserToken(localStorage.getItem("userToken"))
    }
  },[])
  return <>
    <RouterProvider router={Routers}></RouterProvider>

  
  
  
  
  </>
}
