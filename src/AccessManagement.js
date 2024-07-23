import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ArrowBack } from '@mui/icons-material';
import './AccessManagement.css';

const accessData = [
  { user: "Craig", email: "xxx", designation: "xxx", role: "Super User", asset: "-", indication: "-", access: "All" },
  { user: "Kshitij", email: "Xxxx", designation: "Xxx", role: "Forecaster", asset: "Zaherity", indication: "NSCLC", access: "Forecast + Reporting" }
];

function AccessManagement() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/admin');
  };

  return (
    <div className="accessManagementPage">
      <div className="header">
        <Typography variant="h5" align="left" className="accessManagementTitle">Access Management</Typography>
        <Button
          variant="contained"
          color="secondary"
          className="backButton"
          startIcon={<ArrowBack />}
          onClick={handleBackClick}
        >
          Back
        </Button>
      </div>
      <table className="accessManagementTable">
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>Designation</th>
            <th>User Role</th>
            <th>Asset</th>
            <th>Indication</th>
            <th>Access?</th>
          </tr>
        </thead>
        <tbody>
          {accessData.map((access, index) => (
            <tr key={index}>
              <td>{access.user}</td>
              <td>{access.email}</td>
              <td>{access.designation}</td>
              <td>{access.role}</td>
              <td>{access.asset}</td>
              <td>{access.indication}</td>
              <td>{access.access}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AccessManagement;
