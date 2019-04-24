import React from 'react';

const Header = (props) => {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <h3>By: {props.name} @ Integrify BootCamp, Helsinki.</h3>
      <p>Year: Class of {props.year}</p>
    </header>
  );
};

export default Header;
