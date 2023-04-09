import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Componenets/Home/Home';
import Main from './Componenets/Layout/Main';
import Order from './Componenets/Order/Order';
import Grandpa from './Componenets/Grandpa/Grandpa';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('data.json')
      },
      {
       path:'order',
       element:<Order></Order>
      },
      {
        path:'grandpa',
        element:<Grandpa></Grandpa>
      },
    ]
  },
 
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)
