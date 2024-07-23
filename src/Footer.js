import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="/images/viscadialogowhite.png" alt="Logo" className="logo" />
        <p>
          Copyright 2024 © Viscadia. All rights reserved.
          <a href="/terms-and-conditions"> Terms and conditions</a> • 
          <a href="/privacy-policy"> Privacy policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
