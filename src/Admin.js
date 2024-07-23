import React from 'react';
import './Admin.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Settings, ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const navigate = useNavigate();

  const buttonDetails = [
    { name: "Access Management", path: "/access-management", icon: <Settings /> },
    { name: "Forecast Cycle Management", path: "/submission-tracking", icon: <Settings /> },
    { name: "Asset / Indication Management", path: "/asset-management", icon: <Settings /> }
  ];

  const handleButtonClick = (button) => {
    if (button.path) {
      navigate(button.path);
    } else if (button.url) {
      window.open(button.url, '_blank');
    }
  };

  const handleBackClick = () => {
    navigate('/about');
  };

  return (
    <div className="adminPage">
      <div className="header">
        <Typography variant="h4" align="center" className="adminTitle">Admin Module</Typography>
        <Button
          variant="contained"
          className="backButton"
          startIcon={<ArrowBack />}
          onClick={handleBackClick}
          style={{ backgroundColor: '#AA0000', color: 'white' }}
        >
          Back
        </Button>
      </div>
      <Grid container spacing={2} className="sectionsContainer">
        {buttonDetails.map((button, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} className="sectionItem">
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
      </Grid>
    </div>
  );
}

export default Admin;
