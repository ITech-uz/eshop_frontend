import './index.css';
import App from './App.jsx';
import {StrictMode} from 'react';
import Login from "@/pages/auth/Login.jsx";
import {createRoot} from 'react-dom/client';
import Header from "@/components/common/header.jsx";
import Register from "@/pages/auth/Register.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/auth/login",
    element: <Login/>,
  },
  {
    path: "/auth/register",
    element: <Register/>,
  },
  {
    path: "/common/header",
    element: <Header/>,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
