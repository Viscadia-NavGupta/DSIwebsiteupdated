import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ArrowBack } from '@mui/icons-material';
import './ReportingDashboard.css';

const dashboardData = [
  { type: "Portfolio Dashboard", name: "Portfolio Summary", link: "abc", access: "Y" },
  { type: "Asset Dashboard", name: "Enhertu Dashboard", link: "abc", access: "Y" },
  { type: "Asset Dashboard", name: "Dato Dashboard", link: "Abc", access: "Y" },
  { type: "Asset Dashboard", name: "Zaherity Dashboard", link: "Abc", access: "Y" },
  { type: "Asset Dashboard", name: "Vanflyta Dashboard", link: "Abc", access: "Y" },
  { type: "Indication Dashboard", name: "Lung Dashboard", link: "Abc", access: "Y" },
  { type: "Indication Dashboard", name: "Breast Dashboard", link: "Abc", access: "Y" },
  { type: "Indication Dashboard", name: "GI Dashboard", link: "Abc", access: "Y" },
  { type: "Indication Dashboard", name: "Other Indications Dashboard", link: "Abc", access: "Y" }
];

function ReportingDashboard() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/about');
  };

  return (
    <div className="reportingDashboardPage">
      <div className="header">
        <Typography variant="h5" align="left" className="reportingDashboardTitle">Reporting Dashboard</Typography>
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
      <table className="reportingDashboardTable">
        <thead>
          <tr>
            <th>Dashboard Type</th>
            <th>Dashboard Name</th>
            <th>Link</th>
            <th>Access (Y/N)</th>
          </tr>
        </thead>
        <tbody>
          {dashboardData.map((dashboard, index) => (
            <tr key={index}>
              <td>{dashboard.type}</td>
              <td>{dashboard.name}</td>
              <td><a href={dashboard.link} target="_blank" rel="noopener noreferrer">{dashboard.link}</a></td>
              <td>{dashboard.access}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReportingDashboard;
