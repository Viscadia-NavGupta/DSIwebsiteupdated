import React from 'react';
import './About.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Settings } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function About({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const buttonDetails = [
    { name: "Model Builder", path: "/admin", icon: <Settings /> },
    { name: "Assumption Catalogue", url: "https://www.google.com", icon: <Settings /> },
    { name: "Reporting Dashboard",  path: "/reporting-dashboard", icon: <img src="/images/dashboard.svg" alt="Model Builder" className="iconsize" /> },
    { name: "Model Repository", url: "https://www.google.com", icon: <Settings /> },
    { name: "Scenario Repository", url: "https://www.google.com", icon: <Settings /> },
    { name: "Admin Module", path: "/admin", icon: <img src="/images/adminicon.svg" alt="Model Builder" className="iconsize" /> }
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
        <Grid container spacing={2} className="sectionsContainer">
          <Grid item xs={12} sm={3} className="leftSection">
            <div className="userIconContainer">
              <img src={`/images/Screenshot 2022-02-27 185105.png`} alt="User" className="userImage" />
            </div>
            <div className="aboutLinks">
              <Typography variant="h5" className="userName">Craig Bhai</Typography>
              <ul>
                <li>From Comercials Team</li>
                <li>Brand: Enhertu</li>
                <li>Location: USA</li>
                <li>Fave sport: Lacrosse</li>
                <li>Fav actor: Salu Bhai</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={9} className="rightSection">
            <div className="rightside">
              <div className="buttonContainer">
                {buttonDetails.map((button, index) => (
                  <Grid key={index} item xs={12} sm={6} md={4} className="rightsection-item">
                    <Button
                      variant="contained"
                      color="primary"
                      className="button"
                      style={{ backgroundColor: 'white', color: '#00BFFF' }}
                      onClick={() => handleButtonClick(button)}
                    >
                      {button.icon}
                      <span className="buttonText">{button.name}</span>
                    </Button>
                  </Grid>
                ))}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default About;
