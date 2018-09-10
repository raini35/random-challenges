import React from 'react';

const CityList = ({cities, handleOnClick}) => {
  console.log(cities)
  const liStyle = {
    cursor: 'pointer'
  }
  const listItems = cities.map((city) =>
  <li key={city} onClick={() => handleOnClick(city)} style={liStyle}>{city}</li>
);
  return <div>
    <h2>Available Cities</h2>
    <ul>{listItems}</ul>
  </div>;
};

export default CityList;
