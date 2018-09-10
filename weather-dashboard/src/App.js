import React, { Component} from 'react';
import CityList from './components/CityList';
import CurrentCity from './components/CurrentCity';
import Search from './components/Search';
import './App.css';
import axios from 'axios';
import {weather_api} from './api_key'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCityName: 'N/A',
      selectedCityDetails: {
        "name": "",
        "main": {},
        "weather": {},
        "wind": {}
      },
      // citiesAdded: [],
      // availableCities: [],
      // cityDetails: {
      //   name: "",
      //   main: {},
      //   weather: {},
      //   wind: {}
      // }
    };
  }

  changeCitySelected = (city) => {
    if(city.length === 0) {
      console.log("You didn't enter anything");
    } else {
      console.log("City selected");
      console.log(city);
      this.setState((prevState) => ({
        selectedCityName: city
      }), () => {
        this.updateWeatherInfo();
      })
    }
  }

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Houston,us&appid=${weather_api.key}`)
      .then((res) => {
        let currentCityInfo = {
          "name": res.data.name,
          "main": res.data.main,
          "weather": res.data.weather[0],
          "wind": res.data.wind
        };
        this.setState(prevState => ({
          selectedCityDetails: currentCityInfo
        }));
      })
  }

  updateWeatherInfo = () => {
    console.log("Updating weather info...");
    console.log(this.state.selectedCityName);
    console.log(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.selectedCityName},us&appid=${weather_api.key}`)
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.selectedCityName},us&appid=${weather_api.key}`)
      .then((res) => {
        let currentCityInfo = {
          "name": res.data.name,
          "main": res.data.main,
          "weather": res.data.weather[0],
          "wind": res.data.wind
        };
        this.setState(prevState => ({
          selectedCityDetails: currentCityInfo
        }));
      })
  }

  handleClick = (event) => {

  }

  render() {
    return (
      <div>
        <h1>Weather App</h1>
        <Search submitCity={this.changeCitySelected}/>
        <CurrentCity data={this.state.selectedCityDetails}/>
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
