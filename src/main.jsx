import './index.css';
import App from './App.jsx';
import {StrictMode} from 'react';
import Login from "@/pages/auth/Login.jsx";
import {createRoot} from 'react-dom/client';
import Register from "@/pages/auth/Register.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Category from "@/components/common/category.jsx";

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
    path: "/common/category",
    element: <Category/>,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
