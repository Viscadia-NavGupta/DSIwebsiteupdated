import React from 'react';
import './About.css';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function About({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const buttonDetails = [
    { name: "User Management", description: "Add / Delete Users", path: "/user-management", icon: <img src={`${process.env.PUBLIC_URL}/images/acessmanagment.svg`} alt="Model Builder" className="iconsize" /> },
    { name: "Acess Management", description: "Define and  Control User Access", path: "/access-management", icon: <img src={`${process.env.PUBLIC_URL}/images/cyclemgt.svg`} alt="Model Builder" className="iconsize" /> },
    { name: "Cycle Management", description: "Govern Forecast Cycles", path: "/cycle-tracking", icon: <img src={`${process.env.PUBLIC_URL}/images/support.svg`} alt="Model Builder" className="iconsize" /> },
    { name: "Submission Tracking", description: "Track Forecast Submissions", path: "/submission-tracking", icon: <img src={`${process.env.PUBLIC_URL}/images/submission.svg`} alt="Model Builder" className="iconsize" /> },
    { name: "Asset Indication Management", description: "Manage Asset Universe", path: "/prodcut-managment", icon: <img src={`${process.env.PUBLIC_URL}/images/submission.svg`} alt="Model Builder" className="iconsize" /> },
    { name: "Contact Support", description: "Get Assistance", path: "/contact-us", icon: <img src={`${process.env.PUBLIC_URL}/images/support.svg`} alt="Model Builder" className="iconsize" /> }
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
            <div className="profileContainer">
              <div className="userIconContainer">
                <img src={`${process.env.PUBLIC_URL}/images/carig.png`} alt="User" className="userImage" />
              </div>
              <div className="userNameContainer">
                <Typography variant="h5" className="userName">Craig Leonardi</Typography>
              </div>
              <div className="userDetailsContainer">
                <Typography variant="body1" className="userTitle">Senior Director</Typography>
                <Typography variant="body1" className="userInfo">Lead- US Forecasting & Business Analytics</Typography>
                <Typography variant="body1" className="userLocation">Basking Ridge, New Jersey, United States</Typography>
              </div>
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
