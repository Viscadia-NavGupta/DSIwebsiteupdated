import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import './Contact.css';

function ContactUs() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(!e.target.value.includes('@'));
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.includes('@')) {
      // Implement the logic to handle the form submission
      console.log('Email:', email);
      console.log('Message:', message);
    } else {
      setEmailError(true);
    }
  };

  return (
    <div className="contactUsPage">
      <Typography variant="h4" align="center" className="contactUsTitle">Contact Us</Typography>
      <form className="contactUsForm" onSubmit={handleSubmit}>
        <TextField
          label="Email Id"
          variant="outlined"
          fullWidth
          required
          className="inputField"
          value={email}
          onChange={handleEmailChange}
          error={emailError}
          helperText={emailError ? "Please enter a valid email address" : ""}
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
          className="inputField"
          value={message}
          onChange={handleMessageChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="submitButton"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ContactUs;
