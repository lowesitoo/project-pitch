import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/common/About'
import Contact from './components/common/Contact'
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'
import Doctors from './components/dashboards/Doctors'
import Owners from './components/dashboards/owner/Owners'
import Pets from './components/dashboards/pets/Pets'
import Profile from './components/dashboards/Profile'
import Vaccine from './components/dashboards/Vaccine'

import './index.css'

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/owners" element={<Owners />} />
                    <Route path="/pets" element={<Pets />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/doctors" element={<Doctors />} />
                    <Route path="/vaccine" element={<Vaccine />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
