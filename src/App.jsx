import { useState,useEffect } from 'react'
import './App.css'
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Nothing from './Pages/Nothing/Nothing';
import Pupils from './Pages/Pupils/Pupils';
import Services from './Pages/Services/Services';
import Comments from './Pages/Comments/Comments';
import Sale from './Pages/Aboutus/Aboutus';
import Patients from './Pages/Patients/Patients';
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
/////////imgs
import logo from './assets/logo.png';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import one from './assets/one.png';
import two from './assets/two.png';
import three from './assets/three.png';
import four from './assets/four.png';
import saf from './assets/saf.png';
import icon from './assets/icon.png';
import map from "./assets/map.png";
import students from './assets/students.jfif';
import ava1 from './assets/ava1.jpg';
import ava2 from './assets/ava2.jpg';
import ava3 from './assets/ava3.jpg';
import ava4 from './assets/ava4.jpg';


function App() {
 
  const router=createBrowserRouter([{
    path:"/",
    element:<Layout img={logo}/>,
    children:[
      {
        index:true,
        element:<Home img1={img1} img2={img2} img3={img3} one={one} 
        two={two} three={three} four={four} saf={saf} icon={icon} map={map} stu={students} ava1={ava1} ava2={ava2} ava3={ava3} ava4={ava4} />
      },
      {
        path:"/about",
        element:<About img={saf} />
      },
      {
        path:"/services",
        element:<Services />
      },
      {
        path:"/pupils",
        element:<Pupils/>
      },
      {
        path:"/comments",
        element:<Comments map={map} />
      },
      {
        path:"/sale",
        element:<Sale />
      },
      {
        path:"/patients",
        element:<Patients />
      },
      
      {
        path:"*",
        element:<Nothing/>
      }
    ]
  }])
  
  return (
    <>
    <RouterProvider router={router}  />
    </>
  )
  
}

export default App