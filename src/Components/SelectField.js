import React from 'react';

const SelectField = ({ options, legend, id, value, onChange }) => {
  const optionList = options.map((option, i) => {
    const { label, value } = option;
    return (
      <option value={value} key={value + i}>
        {label}
      </option>
    );
  });
  return (
    <div>
      <legend>{legend}</legend>
      <select id={id} value={value} onChange={onChange}>
        {optionList}
      </select>
    </div>
  );
};

export default SelectField;
