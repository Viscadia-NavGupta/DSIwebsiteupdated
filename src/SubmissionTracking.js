import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import './CycleTracking.css';

const initialCycleData = [
  { cycle: "AF2 2024", asset: "Zaherity", indication: "NSCLC", partnerFirm: "Merck", status: "Locked", forecastOwner: "Kshitiz Shekhawat", lastUpdated: "<<Time Stamp>>" },
  { cycle: "AF2 2024", asset: "Dato", indication: "TL-01", partnerFirm: "Merck", status: "In Progress", forecastOwner: "Bill Bayona", lastUpdated: "<<Time Stamp>>" },
  { cycle: "AF2 2024", asset: "Enhertu", indication: "mBC", partnerFirm: "Astrazeneca", status: "Not Started", forecastOwner: "Rob Hernandez", lastUpdated: "<<Time Stamp>>" },
  { cycle: "AF2 2024", asset: "Enhertu", indication: "mEC", partnerFirm: "Astrazeneca", status: "Locked", forecastOwner: "Rob Hernandez", lastUpdated: "<<Time Stamp>>" }
];

function SubmissionTracking() {
  const [cycleData, setCycleData] = useState(initialCycleData);
  const [isEditing, setIsEditing] = useState(false);

  const handleSelectCycleClick = () => {
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
      { cycle: "", asset: "", indication: "", partnerFirm: "", status: "", forecastOwner: "", lastUpdated: "" }
    ]);
  };

  return (
    <div className="cycleTrackingPage">
      <div className="header">
        <Typography variant="h5" align="left" className="cycleTrackingTitle">Submission Tracking</Typography>
        <div className="headerButtons">
          <Button
            variant="contained"
            color="primary"
            className="selectCycleButton"
            onClick={handleSelectCycleClick}
          >
            Select Cycle
          </Button>
        </div>
      </div>
      <div className="tableContainer">
        <table className="cycleTrackingTable">
          <thead>
            <tr>
              <th>Cycle</th>
              <th>Asset</th>
              <th>Indication</th>
              <th>Partner Firm</th>
              <th>Status</th>
              <th>Forecast Owner</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {cycleData.map((cycle, index) => (
              <tr key={index}>
                {Object.keys(cycle).map((field) => (
                  <td key={field}>
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

export default SubmissionTracking;
