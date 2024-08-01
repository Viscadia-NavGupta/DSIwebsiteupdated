import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import './SubmissionTracking.css';

const initialCycleData = [
  { cycle: "AF1 2023", createdBy: "Craig Leonardi", startDate: "10 Oct Nov 2023", closeDate: "10 Oct Nov 2023", status: "CLOSED" },
  { cycle: "AF2 2024", createdBy: "Craig Leonardi", startDate: "Xxx", closeDate: "Xxx", status: "TO BE INITIATED" },
  { cycle: "LRP 2023", createdBy: "Craig Leonardi", startDate: "Xxx", closeDate: "Xxx", status: "CLOSED" },
  { cycle: "AF2 2024", createdBy: "Craig Leonardi", startDate: "Xxx", closeDate: "Xxx", status: "CLOSED" },
  { cycle: "Q4'24 Refresh", createdBy: "Craig Leonardi", startDate: "Xxx", closeDate: "Xxx", status: "In-Progress" }
];

function CycleTracking() {
  const [cycleData, setCycleData] = useState(initialCycleData);
  const [isEditing, setIsEditing] = useState(false);

  const handleCreateCycleClick = () => {
    setIsEditing(true);
  };

  const handleDoneClick = () => {
    setIsEditing(false);
    // Implement the logic to save the changes
  };

  const handleInputChange = (e, index, field) => {
    const newCycleData = [...cycleData];
    newCycleData[index][field] = e.target.value;
    setCycleData(newCycleData);
  };

  const handleAddRow = () => {
    setCycleData([
      ...cycleData,
      { cycle: "", createdBy: "", startDate: "", closeDate: "", status: "" }
    ]);
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'closed':
        return 'closedStatus';
      case 'in-progress':
        return 'inProgressStatus';
      case 'to be initiated':
        return 'initiatedStatus';
      default:
        return '';
    }
  };

  return (
    <div className="submissionTrackingPage">
      <div className="header">
        <Typography variant="h5" align="left" className="cycleManagementTitle">Cycle Management</Typography>
        <div className="headerButtons">
          <div className="createCycleContainer">
            <Button
              variant="contained"
              color="primary"
              className="createCycleButton"
              onClick={handleCreateCycleClick}
            >
              Create New Cycle
            </Button>
          </div>
          <div className="selectCycleContainer">
            <Button
              variant="contained"
              color="primary"
              className="selectCycleButton"
            >
              Select Cycle
            </Button>
          </div>
        </div>
      </div>
      <div className="tableContainer">
        <table className="cycleManagementTable">
          <thead>
            <tr>
              <th>Cycle</th>
              <th>Created By</th>
              <th>Cycle Start Date</th>
              <th>Cycle Close Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycleData.map((cycle, index) => (
              <tr key={index}>
                {Object.keys(cycle).map((field) => (
                  <td key={field} className={field === 'status' ? getStatusClass(cycle[field]) : ''}>
                    {isEditing ? (
                      <input
                        type="text"
                        value={cycle[field]}
                        onChange={(e) => handleInputChange(e, index, field)}
                      />
                    ) : (
                      cycle[field]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {isEditing && (
          <div className="mainControls">
            <div className="leftContainer">
              <AddIcon
                className="addIcon"
                onClick={handleAddRow}
              />
            </div>
            <div className="centerContainer">
              <Button
                variant="contained"
                color="primary"
                className="doneButton"
                onClick={handleDoneClick}
              >
                Done
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CycleTracking;
