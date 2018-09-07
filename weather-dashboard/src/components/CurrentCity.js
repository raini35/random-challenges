import React from 'react';

const CurrentCity = (props) => (
  <div>
    <h2> Current City </h2>
    <img alt={props.data.weather.description + " icon" } src={"http://openweathermap.org/img/w/"+ props.data.weather.icon+".png"} />
    <p>Name: {props.data.name}</p>
    <p>Description: {props.data.weather.description}</p>
    <p>Current Temp: {props.data.main.temp}</p>
    <p>Temp Min: {props.data.main.temp_min}</p>
    <p>Temp Max: {props.data.main.temp_max}</p>
    <p>Wind Speed: {props.data.wind.speed}</p>
  </div>
);

export default CurrentCity;
