
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import About from './views/Aboutus/Aboutus';
import Gallery from './views/Gallery/Gallery';
import Opendemataccount from './views/Openademataccount/Openademataccount';
import Review from './views/Review/Review';
import Training from './views/Training/Training';
import Contact from './views/Contactus/Contactus';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from './components/Footer/Footer';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/about",
    element: <About/>
  },
  {
    path:"/gallery",
    element:<Gallery/>
  },
  {
    path:"/opendemataccount",
    element:<Opendemataccount/>
  },
  {
    path:"/review",
    element:<Review/>
  },
  {
    path:"/training",
    element:<Training/>
  },
  {
    path:"/contact",
    element:<Contact/>
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<> 
   <RouterProvider router={router}/>
  </>
);

