import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Index1 from './Components/Pages/Index1.jsx'
import Home from './Components/Pages/Home.jsx'
import NotFound from './Components/Pages/NotFound.jsx'


const router = createBrowserRouter([
  
{//App
  path:"/",
  element:  <App />,
  errorElement:  <NotFound />
  },

  {
    path:'/',
    element: <Home/>,
  }
  ,
  {
    path: '/Index1',
    element: <Index1/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)