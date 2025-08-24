import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import {Main} from "./components/Main.jsx";
import {Home} from "./Pages/Home.jsx";
import {Error} from "./Pages/Error.jsx";
import {Login} from "./Pages/Login.jsx";
import {SignUp} from "./Pages/SignUp.jsx";
import {TheBook} from "./Pages/TheBook.jsx";
import {Blogs} from "./Pages/Blogs.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'signup',
                element:<SignUp></SignUp>
            },
            {
                path:'thebook',
                element:<TheBook></TheBook>
            },
            {
                path:'blogs',
                element:<Blogs></Blogs>
            }
        ]
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />,
  </StrictMode>,
)
