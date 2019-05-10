import React from 'react';

const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      <h3>Class of year: {props.year}</h3>
      <h4>{props.children}</h4>
    </header>
  );
};

export default Header;
