import React, { useState } from 'react';
import './UserManagement.css';
import { Pie } from 'react-chartjs-2';
import { Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';
import './chartjsSetup'; // Import the chartjs setup

function UserManagement() {
  const [users, setUsers] = useState([
    { name: "Craig Leonardi", email: "craig.leonardi@daiichisankyo.com", designation: "Senior Director", businessUnit: "Commercial" },
    { name: "Kshitiz Shekhawat", email: "kshitiz.shekhawat@daiichisankyo.com", designation: "Associate Director", businessUnit: "Commercial" },
    { name: "Bill Bayona", email: "bill.bayona@daiichisankyo.com", designation: "Associate Director", businessUnit: "Commercial" },
    { name: "XXX", email: "XXX@daiichisankyo.com", designation: "Brand Lead", businessUnit: "Finance" },
    { name: "YYY", email: "YYY@daiichisankyo.com", designation: "Brand Lead", businessUnit: "Manufacturing" }
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", designation: "", businessUnit: "" });

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleDeleteUser = () => {
    if (selectedUser) {
      setUsers(users.filter(user => user !== selectedUser));
      setSelectedUser(null);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewUser({ name: "", email: "", designation: "", businessUnit: "" });
  };

  const handleAddUser = () => {
    setUsers([...users, newUser]);
    handleClose();
  };

  const pieData = {
    labels: ['Commercial', 'Finance', 'Manufacturing'],
    datasets: [
      {
        label: 'Business Unit',
        data: [
          users.filter(user => user.businessUnit === 'Commercial').length,
          users.filter(user => user.businessUnit === 'Finance').length,
          users.filter(user => user.businessUnit === 'Manufacturing').length
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };

  const pieOptions = {
    plugins: {
      datalabels: {
        formatter: (value, context) => {
          return value;
        },
        color: '#fff',
        font: {
          weight: 'bold'
        }
      }
    }
  };

  return (
    <div className="userManagementPage">
      <div className="sectionsContainer">
        <div className="leftSection">
          <Typography variant="h6">User Management</Typography>
          <div className="chart">
            <Pie data={pieData} options={pieOptions} />
            <Typography variant="body1">Total Users: {users.length}</Typography>
          </div>
        </div>
        <div className="rightSection">
          <div className="buttonsContainer">
            <Button variant="contained" color="primary" onClick={handleOpen} startIcon={<AddIcon />}>Add New User</Button>
            <Button variant="contained" color="secondary" onClick={handleDeleteUser} startIcon={<DeleteIcon />}>Delete User</Button>
          </div>
          <div className="tableContainer">
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>User</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Designation</TableCell>
                    <TableCell>Business Unit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user, index) => (
                    <TableRow key={index} selected={selectedUser === user} onClick={() => handleSelectUser(user)}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.designation}</TableCell>
                      <TableCell><span className="businessUnit">{user.businessUnit}</span></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Email"
            fullWidth
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Designation"
            fullWidth
            value={newUser.designation}
            onChange={(e) => setNewUser({ ...newUser, designation: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Business Unit"
            fullWidth
            value={newUser.businessUnit}
            onChange={(e) => setNewUser({ ...newUser, businessUnit: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleAddUser} color="primary">Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default UserManagement;
