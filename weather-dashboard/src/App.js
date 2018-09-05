import React, { Component } from 'react';
import logo from './logo.svg';
import CityList from './components/CityList';
import Demo from './components/Demo'; 
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: [],
      availableCities: []
    };
  }

  render() {
    return (
      <div>
        <h1>Weather app</h1>
        <CityList />
        <button>+</button>
        <Demo />
      </div>
    );
  }
}

export default App;
