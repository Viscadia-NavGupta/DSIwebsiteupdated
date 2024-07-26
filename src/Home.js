import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as AWSConnections from './awsconnection';
import './Home.css';
import Footer from './Footer';

function Home({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      handleProceedClick(storedEmail, storedPassword);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/about');
  };

  const handleProceedClick = async (emailParam, passwordParam) => {
    const emailToUse = emailParam || email;
    const passwordToUse = passwordParam || password;

    if (!emailToUse || typeof emailToUse !== 'string' || !emailToUse.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const result = await AWSConnections.getCognitoAccessToken(emailToUse, passwordToUse);

    if (result.success) {
      setErrorMessage("");
      sessionStorage.setItem("username", emailToUse);
      localStorage.setItem('email', emailToUse);
      localStorage.setItem('password', passwordToUse);
      handleLogin();
    } else {
      setErrorMessage(result.message);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleProceedClick();
    }
  };

  return (
    <div id="root">
      <div className="homeContainer">
        <div className="topHeader">
          <div className="logoContainer">
            <img src="/images/viscadiaVwhite.png" alt="Viscadia" className="topBarLogo" />
            <span className="topBarText">Forecast Platform</span>
          </div>
        </div>
        <div className="mainContent">
          <div className="leftContent">
            <div className="logoContainer">
              <img src="/images/dsilogo.png" alt="Logo" className="headerLogo" />
            </div>
            <div className="loginForm">
              <input
                type="email"
                placeholder="Username"
                className="loginInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="loginInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <div className="buttonContainer">
                <button className="loginButton" onClick={() => handleProceedClick(email, password)}>Log In</button>
              </div>
              <div className="extraOptions">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <Link to="/forgot-password" className="forgotPasswordLink">
                  Forgot Your Password?
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer color="red" /> {/* Use red color for the home page */}
      </div>
    </div>
  );
}

export default Home;
