import React from 'react';

function Pokemon(props) {
  return (
    <div>
      <img src={props.url} />
      <h1>{props.name} </h1>
    </div>
  );
}

export default Pokemon;
