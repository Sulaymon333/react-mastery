import React from 'react';

const InputField = ({ label, id, name, type, value, placeholder, onChange, error, checked }) => {
  if (type == 'radio' || type == 'checkbox') {
    return (
      <div>
        <input type={type} id={id} name={name} value={value} onChange={onChange} checked={checked} />
        <label htmlFor={id}>{label} </label>
      </div>
    );
  }
  return (
    <div>
      <label htmlFor={id}>{label} </label>
      <input type={type} id={id} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;
