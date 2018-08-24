import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      front_default: <h1>Hello World!!!</h1>,
      back_default: <div></div>,
      front_shiny: <div></div>,
      back_shiny: <div></div>,
    }
  }
  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon-form/1/')
      .then(results => {
        return results.json();
      })
      .then(data => {
        let front_default = <img src={data.sprites.front_default} />
        let back_default = <img src={data.sprites.back_default} />
        let front_shiny = <img src={data.sprites.front_shiny} />
        let back_shiny = <img src={data.sprites.back_shiny} />

        this.setState({
          front_default: front_default,
          back_default: back_default,
          front_shiny: front_shiny,
          back_shiny: back_shiny,
        })
      })
  }
  render() {
    return (
      <div>
        {this.state.front_default}
        {this.state.back_default}
        {this.state.front_shiny}
        {this.state.back_shiny}
      </div>
    );
  }
}

export default App;
