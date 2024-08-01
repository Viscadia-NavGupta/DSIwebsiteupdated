import React, { useState } from 'react';
import './ProductManagement.css';
import { Pie } from 'react-chartjs-2';
import { Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select } from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';
import './chartjsSetup'; // Import the chartjs setup

function ProductManagement() {
  const [products, setProducts] = useState([
    { name: "Product A", category: "Category 1" },
    { name: "Product B", category: "Category 2" }
  ]);

  const [indications, setIndications] = useState([
    { product: "Product A", indication: "Indication 1", subIndication: "Sub-Indication 1" },
    { product: "Product A", indication: "Indication 2", subIndication: "Sub-Indication 2" }
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedIndication, setSelectedIndication] = useState(null);
  const [openProductDialog, setOpenProductDialog] = useState(false);
  const [openIndicationDialog, setOpenIndicationDialog] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", category: "" });
  const [newIndication, setNewIndication] = useState({ product: "", indication: "", subIndication: "" });

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleSelectIndication = (indication) => {
    setSelectedIndication(indication);
  };

  const handleDeleteProduct = () => {
    if (selectedProduct) {
      setProducts(products.filter(product => product !== selectedProduct));
      setIndications(indications.filter(indication => indication.product !== selectedProduct.name));
      setSelectedProduct(null);
    }
  };

  const handleDeleteIndication = () => {
    if (selectedIndication) {
      setIndications(indications.filter(indication => indication !== selectedIndication));
      setSelectedIndication(null);
    }
  };

  const handleOpenProductDialog = () => {
    setOpenProductDialog(true);
  };

  const handleOpenIndicationDialog = () => {
    setOpenIndicationDialog(true);
  };

  const handleCloseProductDialog = () => {
    setOpenProductDialog(false);
    setNewProduct({ name: "", category: "" });
  };

  const handleCloseIndicationDialog = () => {
    setOpenIndicationDialog(false);
    setNewIndication({ product: "", indication: "", subIndication: "" });
  };

  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
    handleCloseProductDialog();
  };

  const handleAddIndication = () => {
    setIndications([...indications, newIndication]);
    handleCloseIndicationDialog();
  };

  const pieData = {
    labels: products.map(product => product.name),
    datasets: [
      {
        label: 'Indications',
        data: products.map(product => indications.filter(indication => indication.product === product.name).length),
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
    <div className="productManagementPage">
      <div className="sectionsContainer">
        <div className="leftSection">
          <Typography variant="h6">Product Management</Typography>
          <div className="chart">
            <Pie data={pieData} options={pieOptions} />
            <Typography variant="body1">Total Products: {products.length}</Typography>
          </div>
        </div>
        <div className="rightSection">
          <div className="buttonsContainer">
            <Button variant="contained" color="primary" onClick={handleOpenProductDialog} startIcon={<AddIcon />}>Add New Product</Button>
            <Button variant="contained" color="secondary" onClick={handleDeleteProduct} startIcon={<DeleteIcon />}>Delete Product</Button>
          </div>
          <div className="tableContainer">
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>Category</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product, index) => (
                    <TableRow key={index} selected={selectedProduct === product} onClick={() => handleSelectProduct(product)}>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
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
                    <TableCell>Product</TableCell>
                    <TableCell>Indication</TableCell>
                    <TableCell>Sub-Indication</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {indications.map((indication, index) => (
                    <TableRow key={index} selected={selectedIndication === indication} onClick={() => handleSelectIndication(indication)}>
                      <TableCell>{indication.product}</TableCell>
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

      <Dialog open={openProductDialog} onClose={handleCloseProductDialog}>
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Product Name"
            fullWidth
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Category"
            fullWidth
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseProductDialog} color="primary">Cancel</Button>
          <Button onClick={handleAddProduct} color="primary">Add</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openIndicationDialog} onClose={handleCloseIndicationDialog}>
        <DialogTitle>Add Indication</DialogTitle>
        <DialogContent>
          <Select
            fullWidth
            value={newIndication.product}
            onChange={(e) => setNewIndication({ ...newIndication, product: e.target.value })}
            displayEmpty
          >
            <MenuItem value="" disabled>Select Product</MenuItem>
            {products.map((product, index) => (
              <MenuItem key={index} value={product.name}>{product.name}</MenuItem>
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

export default ProductManagement;
