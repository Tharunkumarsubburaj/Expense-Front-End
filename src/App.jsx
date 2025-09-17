import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import { useState } from "react"
import './App.css'
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Project from "./components/Project"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-navy-900 text-white font-[Inter,ui-sans-serif,system-ui] antialiased">
      <BrowserRouter>
        {/* NAVBAR */}
        <nav className="bg-navy-800/60 backdrop-blur-md ring-1 ring-white/10 p-4 shadow-elev-1">
          <div className="container mx-auto flex space-x-6 items-center">
            <Link
              to="/"
              className="text-white/80 hover:text-white transition tracking-wide"
            >
              Home
            </Link>
            <span className="text-white/30">|</span>
            <Link
              to="/about"
              className="text-white/80 hover:text-white transition tracking-wide"
            >
              About
            </Link>
            <span className="text-white/30">|</span>
            <Link
              to="/contact"
              className="text-white/80 hover:text-white transition tracking-wide"
            >
              Contact
            </Link>
            <span className="text-white/30">|</span>
            <Link
              to="/project"
              className="text-white/80 hover:text-white transition tracking-wide"
            >
              Project
            </Link>
          </div>
        </nav>

        {/* MAIN CONTENT */}
        <main className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
