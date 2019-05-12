import React from 'react';

const TextAreaField = ({ id, value, cols, rows, onChange }) => {
  return <textarea name="" id={id} value={value} cols={cols} rows={rows} onChange={onChange} />;
};
export default TextAreaField;
