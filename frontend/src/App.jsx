// import React from "react"
import React from "react"
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import HomePage from './pages/HomePage'
import FilmsPage from './pages/Films'
import LoginPage from './pages/Login'
import MoviePage from './pages/Movies'
import ProfilePage from './pages/Profile'
import SignupPage from './pages/SignUp'

function App() {
  return (
    <Router>
      <div className="font-sans bg-gray-900 text-white min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/films" element={<FilmsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
