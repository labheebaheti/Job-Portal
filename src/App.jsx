import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import InternshipDetail from './Pages/InternshipDetail'
import About from './Pages/About'
import Login from './Pages/Login'
import Layout from './Components/Layout'
import SignUp from './Pages/SignUp';
import "./index.css";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/internship/:id" element={<InternshipDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<SignUp/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
