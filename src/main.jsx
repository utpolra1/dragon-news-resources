import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Roots from './Routes/Roots.jsx';
import Home from './Home/Home.jsx';
import Login from './User/Login.jsx';
import Register from './User/Register.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import NewsDatils from './Home/NewsDatils.jsx';
import PrivetRoute from './PrivetRoute/PrivetRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement:<div>OPPS!...</div>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/newsdails/:id",
        element:<PrivetRoute><NewsDatils></NewsDatils></PrivetRoute>,
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
