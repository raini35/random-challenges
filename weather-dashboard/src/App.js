import React, {
  Component
} from 'react';
import logo from './logo.svg';
import CityList from './components/CityList';
import './App.css';
import axios from 'axios';
import {
  weather_api
} from './api_key'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: {},
      citiesAdded: [],
      availableCities: [],
      cityDetails: {
        name: "",
        main: {},
        weather: {},
        wind: {}
      }
    };
  }

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=${weather_api.key}`)
      .then((res) => {
        console.log(res.data);
        let name = "HOLLYWOOD";
        let main = res.data.main;
        let weather = res.data.weather;
        let wind = res.data.wind;
        let icon = {
          url: `http://openweathermap.org/img/w/${weather.icon}.png`
          description:
        }
        this.setState(prevState => ({
          cityDetails: {
            ...prevState.cityDetails,
            name: {
              icon,
              main,
              weather,
              wind
            }
          }
        }))
      })
  }

  function
  render() {
    return (
      <div>
        <h1> Weather app </h1>
        <img src="http://openweathermap.org/img/w/10d.png" />
        <p>Name:</p>
        <p>Description:</p>
        <p>Current Temp:</p>
        <p>Temp Min:</p>
        <p>Temp Max:</p>
        <p>Wind Speed:</p>
      </div>
    );
  }
}

export default App;
