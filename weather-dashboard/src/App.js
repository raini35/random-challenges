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
      selectedCityName: '',
      selectedCityDetails: {
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

  changeCitySelected = (city) => {
    if(city.length === 0) {
      console.log("You didn't enter anything.")
    } else {
      console.log("Changed city");
      this.setState(prevState => {
        selectedCityName: city
      }, () => {
        console.log(this.state.selectedCityName);
      })

    }
  }
  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=${weather_api.key}`)
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
          selectedCityDetails: currentCityInfo
        }));

        console.log(this.state.selectedCityDetails);
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
