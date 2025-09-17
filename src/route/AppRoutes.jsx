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
            <Route path="/register" element={<RegisterPage />} />
            {/* Dashbaord  */}
            <Route path="/alumni" element={<AlumniDashboard />} />
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            {/* Features  */}
            <Route path="/directory" element={<AlumniDashboard />} />
            <Route path="/events" element={<Events />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/feedback" element={<Feedback />} />
            {/* 404 Fallback  */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
);

export default AppRoute;