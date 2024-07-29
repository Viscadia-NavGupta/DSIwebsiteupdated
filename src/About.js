import React from 'react';
import './About.css';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function About({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const buttonDetails = [
    { name: "User Management", description: "Manage user permissions and control access", path: "/access-management", icon: <img src={`${process.env.PUBLIC_URL}/images/acessmanagment.svg`} alt="Model Builder" className="iconsize" /> },
    { name: "Acess Management", description: "Manage and track forecast cycles", path: "/submission-tracking", icon: <img src={`${process.env.PUBLIC_URL}/images/cyclemgt.svg`} alt="Model Builder" className="iconsize" /> },
    { name: "Submission Tracking", description: "Keep track of all your submissions in one place", path: "/cycle-tracking", icon: <img src={`${process.env.PUBLIC_URL}/images/submission.svg`} alt="Model Builder" className="iconsize" /> },
    { name: "Cycle Tracking", description: "Get assistance with any issues or inquiries.", path: "/contact-us", icon: <img src={`${process.env.PUBLIC_URL}/images/support.svg`} alt="Model Builder" className="iconsize" /> },
    { name: "Asset Indication Management", description: "Keep track of all your submissions in one place", path: "/cycle-tracking", icon: <img src={`${process.env.PUBLIC_URL}/images/submission.svg`} alt="Model Builder" className="iconsize" /> },
    { name: "Contact Support", description: "Get assistance with any issues or inquiries.", path: "/contact-us", icon: <img src={`${process.env.PUBLIC_URL}/images/support.svg`} alt="Model Builder" className="iconsize" /> }
  ];

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleButtonClick = (button) => {
    if (button.path) {
      navigate(button.path);
    } else if (button.url) {
      window.open(button.url, '_blank');
    }
  };

  return (
    <div className="aboutPage">
      <div className="aboutContainer">
        <div className="sectionsContainer">
          <div className="leftSection">
            <div className="userIconContainer">
              <img src={`${process.env.PUBLIC_URL}/images/carig.png`} alt="User" className="userImage" />
            </div>
            <div className="aboutLinks">
              <Typography variant="h5" className="userName">Craig Leonardi</Typography>
              <ul>
                <li>Senior Director</li>
                <li>US Forecasting & Business Analytics</li>
                <li>Basking Ridge, New Jersey, United States</li>
              </ul>
            </div>
          </div>
          <div className="rightSection">
            <div className="buttonGrid">
              {buttonDetails.map((button, index) => (
                <div key={index} className="customButton" onClick={() => handleButtonClick(button)}>
                  {button.icon}
                  <div className="buttonText">
                    <Typography variant="h6" className="buttonTitle">{button.name}</Typography>
                    <Typography variant="body2" className="buttonDescription">{button.description}</Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
