import React from 'react';

function Button(props) {
  return <button onClick={() => props.handleClick(props.url)}>{props.buttonName}</button>
}

export default Button;
