import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Header = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    sessionStorage.removeItem('username');
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleHelpClick = () => {
    // Add your help click handling logic here
    alert('Help icon clicked!');
  };

  const handleLogoClick = () => {
    navigate('/about');
  };

  return (
    <header className="header-content">
      <div className="logo-container" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        <img src="/images/viscadiaVwhite.png" alt="Viscadia" className="logo" />
        <span className="title">DSI Forecast Platform</span>
      </div>
      <div className="header-right">
        <HelpOutlineIcon className="help-icon" onClick={handleHelpClick} />
        <button className="signout" onClick={handleSignOut}>SIGN OUT</button>
      </div>
    </header>
  );
};

export default Header;
