import React from 'react';

const UiPlaceholder = props => {
  return (
    <div className="ui placeholder segment">
      <h4 className="ui header">{props.header}</h4>
      {props.children}
    </div>
  );
};

export default UiPlaceholder;
