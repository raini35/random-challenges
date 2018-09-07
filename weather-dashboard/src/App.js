import React, { Component} from 'react';
import CityList from './components/CityList';
import CurrentCity from './components/CurrentCity';
import './App.css';
import axios from 'axios';
import {weather_api} from './api_key'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: {
        name: "Filler City",
        main: {},
        weather: {},
        wind: {}
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
    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=${weather_api.key}`)
      .then((res) => {
        console.log(res.data);
        // let name = "HOLLYWOOD";
        // let main = res.data.main;
        // let weather = res.data.weather;
        // let wind = res.data.wind;
        // let icon = {
        //   url: `http://openweathermap.org/img/w/${weather.icon}.png`
        //   description:
        // }
        // this.setState(prevState => ({
        //   cityDetails: {
        //     ...prevState.cityDetails,
        //     name: {
        //       icon,
        //       main,
        //       weather,
        //       wind
        //     }
        //   }
        // }))
      })
  }

  function
  render() {
    return (
      <div>
        <CurrentCity />
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
