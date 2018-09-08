import React, { Component} from 'react';
import CityList from './components/CityList';
import CurrentCity from './components/CurrentCity';
import './App.css';
import axios from 'axios';
import {WEATHER_API} from './api_key'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: {
        "name": "",
        "main": {},
        "weather": {},
        "wind": {}
      },
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
    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=${WEATHER_API.key}`)
      .then((res) => {
        console.log(res.data);
        console.log(res.data.name);
        console.log(res.data.main);
        console.log(res.data.weather[0]);
        console.log(res.data.wind);
        let currentCityInfo = {
          "name": res.data.name,
          "main": res.data.main,
          "weather": res.data.weather[0],
          "wind": res.data.wind
        };
        this.setState(prevState => ({
          selectedCity: currentCityInfo
        }));

        console.log(this.state.selectedCity);
      })
  }

  handleClick = (event) => {

  }

  render() {
    return (
      <div>
        <h1>Weather App</h1>
        <CurrentCity data={this.state.selectedCity}/>
        <CityList />
      </div>
    );
  }
}

export default App;




//
//
// import React from "react";
//
// class Person extends React.Component {
//   state = {
//     selected: false
//   }
//   handleClick = () => {
//     this.setState((prevState) => {
//       return {
//         selected: !prevState.selected
//       }
//     });
//   }
//   render(){
//     const listItemStyle = {
//       backgroundColor: this.state.selected ? "yellow" : null
//     }
//     return (
//       <li style={listItemStyle} onClick={this.handleClick}>
//         {this.props.name}
//       </li>
//     );
//   }
// }
//
// export default Person;
