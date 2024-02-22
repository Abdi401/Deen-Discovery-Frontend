// App.jsx
//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import CoursePage from './Components/CoursePage';
import Dashboard from './Components/Dashboard';
import QiblaDirection from './Components/QiblaDirection';



function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="Course" element={<CoursePage />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="QiblaDirection" element={<QiblaDirection />} />



        </Routes>
      </>
    </Router>
  );
}

export default App;
