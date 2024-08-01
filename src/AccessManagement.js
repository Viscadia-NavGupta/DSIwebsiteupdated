import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import './AccessManagement.css';

const initialAccessData = [
  { user: "Craig Leonardi", email: "craig.leonardi@daiichisankyo.com", designation: "Senior Director", accessLevel: "Super User", asset: "ALL", indication: "ALL" },
  { user: "Kshitiz Shekhawat", email: "kshitiz.shekhawat@daiichisankyo.com", designation: "Associate Director", accessLevel: "Forecast + Reporting", asset: "Zaherity", indication: "NSCLC" },
  { user: "Bill Bayona", email: "bill.bayona@daiichisankyo.com", designation: "Associate Director", accessLevel: "Forecast + Reporting", asset: "Dato", indication: "ALL" },
  { user: "XXX", email: "XXX@daiichisankyo.com", designation: "Brand Lead", accessLevel: "Reporting Only", asset: "Dato", indication: "ALL" },
  { user: "YYY", email: "YYY@daiichisankyo.com", designation: "Brand Lead", accessLevel: "Reporting Only", asset: "Enhertu", indication: "ALL" }
];

function AccessManagement() {
  const [accessData, setAccessData] = useState(initialAccessData);
  const [isEditing, setIsEditing] = useState(false);

  const handleManageUsersClick = () => {
    setIsEditing(true);
  };

  const handleDoneClick = () => {
    setIsEditing(false);
    // Implement the logic to save the changes
  };

  const handleInputChange = (e, index, field) => {
    const newAccessData = [...accessData];
    newAccessData[index][field] = e.target.value;
    setAccessData(newAccessData);
  };

  const handleAddRow = () => {
    setAccessData([
      ...accessData,
      { user: "", email: "", designation: "", accessLevel: "", asset: "", indication: "" }
    ]);
  };

  return (
    <div className="accessManagementPage">
      <div className="header">
        <Typography variant="h5" align="left" className="accessManagementTitle">Access Management</Typography>
        <Button
          variant="contained"
          color="primary"
          className="manageUsersButton"
          onClick={handleManageUsersClick}
        >
          Manage Access
        </Button>
      </div>
      <div className="tableContainer">
        <table className="accessManagementTable">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Access Level</th>
              <th>Asset</th>
              <th>Indication</th>
            </tr>
          </thead>
          <tbody>
            {accessData.map((access, index) => (
              <tr key={index}>
                {Object.keys(access).map((field) => (
                  <td key={field}>
                    {isEditing ? (
                      <input
                        type="text"
                        value={access[field]}
                        onChange={(e) => handleInputChange(e, index, field)}
                      />
                    ) : (
                      access[field]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
  );
}

export default AccessManagement;
