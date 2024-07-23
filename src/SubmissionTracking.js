import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ArrowBack } from '@mui/icons-material';
import './SubmissionTracking.css';

const submissionData = [
  { cycle: "LRP 2024", asset: "Dato Dxd", indication: "TL-01", status: "Locked", lastUpdated: "2023-07-20", forecastOwner: "John Doe", lastUpdatedBy: "Jane Smith" },
  { cycle: "LRP 2024", asset: "Zaherity", indication: "NSCLC", status: "In Progress", lastUpdated: "2023-07-18", forecastOwner: "Alice Brown", lastUpdatedBy: "Mark Johnson" },
  { cycle: "LRP 2024", asset: "Enhertu", indication: "TL-01", status: "Not Started", lastUpdated: "2023-07-15", forecastOwner: "Robert Davis", lastUpdatedBy: "Laura Wilson" }
];

function SubmissionTracking() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/admin');
  };

  return (
    <div className="submissionTrackingPage">
      <div className="header">
        <Typography variant="h5" align="left" className="submissionTrackingTitle">Submission Tracking</Typography>
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
      <table className="submissionTrackingTable">
        <thead>
          <tr>
            <th>Cycle</th>
            <th>Asset</th>
            <th>Indication</th>
            <th>Status</th>
            <th>Last Updated</th>
            <th>Forecast Owner</th>
            <th>Last updated by</th>
          </tr>
        </thead>
        <tbody>
          {submissionData.map((submission, index) => (
            <tr key={index}>
              <td>{submission.cycle}</td>
              <td>{submission.asset}</td>
              <td>{submission.indication}</td>
              <td className={submission.status.replace(" ", "").toLowerCase()}>{submission.status}</td>
              <td>{submission.lastUpdated}</td>
              <td>{submission.forecastOwner}</td>
              <td>{submission.lastUpdatedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubmissionTracking;
