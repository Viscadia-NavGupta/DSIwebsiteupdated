import React, { useState } from 'react';
import './ProductManagement.css';
import { Pie } from 'react-chartjs-2';
import { Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select } from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';
import './chartjsSetup'; // Import the chartjs setup

function AssetManagement() {
  const [assets, setAssets] = useState([
    { name: "Asset A", category: "Category 1" },
    { name: "Asset B", category: "Category 2" }
  ]);

  const [indications, setIndications] = useState([
    { asset: "Asset A", indication: "Indication 1", subIndication: "Sub-Indication 1" },
    { asset: "Asset A", indication: "Indication 2", subIndication: "Sub-Indication 2" }
  ]);

  const [selectedAsset, setSelectedAsset] = useState(null);
  const [selectedIndication, setSelectedIndication] = useState(null);
  const [openAssetDialog, setOpenAssetDialog] = useState(false);
  const [openIndicationDialog, setOpenIndicationDialog] = useState(false);
  const [newAsset, setNewAsset] = useState({ name: "", category: "" });
  const [newIndication, setNewIndication] = useState({ asset: "", indication: "", subIndication: "" });

  const handleSelectAsset = (asset) => {
    setSelectedAsset(asset);
  };

  const handleSelectIndication = (indication) => {
    setSelectedIndication(indication);
  };

  const handleDeleteAsset = () => {
    if (selectedAsset) {
      setAssets(assets.filter(asset => asset !== selectedAsset));
      setIndications(indications.filter(indication => indication.asset !== selectedAsset.name));
      setSelectedAsset(null);
    }
  };

  const handleDeleteIndication = () => {
    if (selectedIndication) {
      setIndications(indications.filter(indication => indication !== selectedIndication));
      setSelectedIndication(null);
    }
  };

  const handleOpenAssetDialog = () => {
    setOpenAssetDialog(true);
  };

  const handleOpenIndicationDialog = () => {
    setOpenIndicationDialog(true);
  };

  const handleCloseAssetDialog = () => {
    setOpenAssetDialog(false);
    setNewAsset({ name: "", category: "" });
  };

  const handleCloseIndicationDialog = () => {
    setOpenIndicationDialog(false);
    setNewIndication({ asset: "", indication: "", subIndication: "" });
  };

  const handleAddAsset = () => {
    setAssets([...assets, newAsset]);
    handleCloseAssetDialog();
  };

  const handleAddIndication = () => {
    setIndications([...indications, newIndication]);
    handleCloseIndicationDialog();
  };

  const pieData = {
    labels: assets.map(asset => asset.name),
    datasets: [
      {
        label: 'Indications',
        data: assets.map(asset => indications.filter(indication => indication.asset === asset.name).length),
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
    <div className="assetManagementPage">
      <div className="sectionsContainer">
        <div className="leftSection">
          <Typography variant="h6">Asset Management</Typography>
          <div className="chart">
            <Pie data={pieData} options={pieOptions} />
            <Typography variant="body1">Total Assets: {assets.length}</Typography>
          </div>
        </div>
        <div className="rightSection">
          <div className="buttonsContainer">
            <Button variant="contained" color="primary" onClick={handleOpenAssetDialog} startIcon={<AddIcon />}>Add New Asset</Button>
            <Button variant="contained" color="secondary" onClick={handleDeleteAsset} startIcon={<DeleteIcon />}>Delete Asset</Button>
          </div>
          <div className="tableContainer">
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Asset</TableCell>
                    <TableCell>Category</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {assets.map((asset, index) => (
                    <TableRow key={index} selected={selectedAsset === asset} onClick={() => handleSelectAsset(asset)}>
                      <TableCell>{asset.name}</TableCell>
                      <TableCell>{asset.category}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="buttonsContainer">
            <Button variant="contained" color="primary" onClick={handleOpenIndicationDialog} startIcon={<AddIcon />}>Add Indication</Button>
            <Button variant="contained" color="secondary" onClick={handleDeleteIndication} startIcon={<DeleteIcon />}>Delete Indication</Button>
          </div>
          <div className="tableContainer indicationTableContainer">
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Asset</TableCell>
                    <TableCell>Indication</TableCell>
                    <TableCell>Sub-Indication</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {indications.map((indication, index) => (
                    <TableRow key={index} selected={selectedIndication === indication} onClick={() => handleSelectIndication(indication)}>
                      <TableCell>{indication.asset}</TableCell>
                      <TableCell>{indication.indication}</TableCell>
                      <TableCell>{indication.subIndication}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>

      <Dialog open={openAssetDialog} onClose={handleCloseAssetDialog}>
        <DialogTitle>Add New Asset</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Asset Name"
            fullWidth
            value={newAsset.name}
            onChange={(e) => setNewAsset({ ...newAsset, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Category"
            fullWidth
            value={newAsset.category}
            onChange={(e) => setNewAsset({ ...newAsset, category: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAssetDialog} color="primary">Cancel</Button>
          <Button onClick={handleAddAsset} color="primary">Add</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openIndicationDialog} onClose={handleCloseIndicationDialog}>
        <DialogTitle>Add Indication</DialogTitle>
        <DialogContent>
          <Select
            fullWidth
            value={newIndication.asset}
            onChange={(e) => setNewIndication({ ...newIndication, asset: e.target.value })}
            displayEmpty
          >
            <MenuItem value="" disabled>Select Asset</MenuItem>
            {assets.map((asset, index) => (
              <MenuItem key={index} value={asset.name}>{asset.name}</MenuItem>
            ))}
          </Select>
          <TextField
            margin="dense"
            label="Indication"
            fullWidth
            value={newIndication.indication}
            onChange={(e) => setNewIndication({ ...newIndication, indication: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Sub-Indication"
            fullWidth
            value={newIndication.subIndication}
            onChange={(e) => setNewIndication({ ...newIndication, subIndication: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseIndicationDialog} color="primary">Cancel</Button>
          <Button onClick={handleAddIndication} color="primary">Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AssetManagement;
