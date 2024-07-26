import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Admin from './Admin';
import Home from './Home';
import NotFound from './NotFound';
import ReportingDashboard from './ReportingDashboard';
import SubmissionTracking from './SubmissionTracking';
import AccessManagement from './AccessManagement';
import CycleTracking from './CycleTracking';
import ContactUs from './Contact';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const MainLayout = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
      <div className="app-container">
        {!isHomePage && <Header setIsLoggedIn={setIsLoggedIn} className="header" />}
        <div className="content-container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/reporting-dashboard" element={<ReportingDashboard />} />
            <Route path="/submission-tracking" element={<SubmissionTracking />} />
            <Route path="/access-management" element={<AccessManagement />} />
            <Route path="/cycle-Tracking" element={<CycleTracking />} />
            <Route path="/Contact-Us" element={<ContactUs />} />
            {/* Add other routes here */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        {!isHomePage && <Footer color="blue" />} {/* Use blue color for other pages */}
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
};

export default App;
