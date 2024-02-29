import React from 'react';
import './Footer.css'

function Footer({ children }) {
    return (
      <div className='footer'>
        {children}
      </div>
    );
  }
  
  export default Footer;