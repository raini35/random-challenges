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
      availableCities: {},
    };
  }

  changeCitySelected = (city) => {
    if(city.length === 0) {
      console.log("You didn't enter anything");
    } else {
      this.setState((prevState) => ({
        selectedCityName: city
      }), () => {
        this.updateWeatherInfo();
      })
    }
  }

  componentDidMount() {
    this.getCityInfo('Houston')
  }

  changeToAvailableCity = (cityName) => {
    this.setState(prevState => ({
      selectedCityDetails: prevState.availableCities[cityName]
    }))
  }

  getCityInfo = (cityName) => {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName},us&appid=${weather_api.key}`)
        .then((res) => {
          let currentCityInfo = {
            "name": res.data.name,
            "main": res.data.main,
            "weather": res.data.weather[0],
            "wind": res.data.wind
          };
          this.setState(prevState => ({
             selectedCityDetails: currentCityInfo,
             availableCities: {
               ...prevState.availableCities,
               [currentCityInfo.name]: currentCityInfo
             }
           }));
        });
  }

  updateWeatherInfo = () => {
    if(this.state.availableCities.hasOwnProperty(this.state.selectedCityName)) {
      this.changeToAvailableCity(this.state.selectedCityName);
    } else {
      this.getCityInfo(this.state.selectedCityName);
    }
  }

  render() {
    return (
      <div>
        <h1>Weather App</h1>
        <Search submitCity={this.changeCitySelected}/>
        <CurrentCity data={this.state.selectedCityDetails}/>
        <CityList cities={Object.keys(this.state.availableCities)} handleOnClick={this.changeToAvailableCity} />
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
