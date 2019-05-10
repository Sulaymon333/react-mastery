import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

Header.defaultProps = {
  title: 'Form handling and Prop types'
};

export default Header;
