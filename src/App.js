import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Admin from './Admin';
import Home from './Home';
import NotFound from './NotFound';
import ReportingDashboard from './ReportingDashboard';
import SubmissionTracking from './SubmissionTracking';
import AccessManagement from './AccessManagement';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="*" element={
          <div className="app-container">
            <Header setIsLoggedIn={setIsLoggedIn} className="header" />
            <div className="content-container">
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/reporting-dashboard" element={<ReportingDashboard />} />
                <Route path="/submission-tracking" element={<SubmissionTracking />} />
                <Route path="/access-management" element={<AccessManagement />} />
                {/* Add other routes here */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer className="footer" />
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;
