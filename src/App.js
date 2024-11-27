// import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Gis from './pages/Gis';
import Login from "./pages/Login"
import Join from "./pages/Join"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <h1>Not Found 🥲</h1>,
    children: [{index: true, element: <Home />},
      {path:'gis', element: <Gis />},
      {path:'login', element: <Login />},
      {path:'join', element: <Join />}
    ]
  }
]);

export default function Navbar(){
  return(
    <RouterProvider router={router} />
  )
}
