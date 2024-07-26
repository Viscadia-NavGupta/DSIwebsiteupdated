import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <span>© 2024 Viscadia. All rights reserved. Confidential.</span>
      </div>
      <div className="footer-right">
        <img src="/images/viscadialogo.png" alt="Viscadia" className="footerLogo" />
      </div>
    </div>
  );
};

export default Footer;
