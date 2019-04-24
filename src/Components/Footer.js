import React from 'react';

const Footer = props => {
  return (
    <footer className="footer">
      <p>Copyright &copy; {props.year}</p>
    </footer>
  );
};

export default Footer;
