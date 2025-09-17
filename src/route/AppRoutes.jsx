import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page Imports 
// import LandingPage from '../pages/LandingPage'

const AppRoute = () => (
    <Router>
        <Routes>
            {/* public */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/login" element={<RegisterPage />} />
            
        </Routes>
    </Router>
)