import React from 'react';
import PropTypes from 'prop-types';

const StudentCard = ({ studentInfo }) => {
  const { name, title, imgUrl } = studentInfo;
  return (
    <li>
      <img src={imgUrl} alt={name} />
      <h2>{name}</h2>
      <p>{title}</p>
    </li>
  );
};

StudentCard.propTypes = {
  studentInfo: PropTypes.object
};

export default StudentCard;
