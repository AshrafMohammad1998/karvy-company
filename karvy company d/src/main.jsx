import React from 'react'
import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AboutUs from './components/AboutUs.jsx'
import Home from './components/Home.jsx';
import Services from './components/Services.jsx';
import ContactUs from './components/ContactUs.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element = {<App />}>
      <Route path="/" element = {<Home />} />
      <Route path="about-us" element = {<AboutUs />} />
      <Route path="services" element = {<Services />} />
      <Route path="contact-us" element = {<ContactUs />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
