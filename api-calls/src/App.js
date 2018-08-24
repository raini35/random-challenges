import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundIndex: 0,
      backgrounds: [],
    }
    this.changeBackground = this.changeBackground.bind(this);
  }

  changeBackground () {
    this.setState(function ({ backgroundIndex }) {
      const nextBackgroundIndex = ++backgroundIndex % this.state.backgrounds.length

      return { backgroundIndex: nextBackgroundIndex }
    }, function () {
      this.timeout = setTimeout(
        this.changeBackground,
        500
      )
    })
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon-form/1/')
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({
          backgrounds: [
            data.sprites.front_default,
            data.sprites.back_default,
            data.sprites.front_shiny,
            data.sprites.back_shiny
          ]
        });
      })
      .then(() => {
        this.timeout = setTimeout(
          this.changeBackground,
          500
        );
      })
  }

  render() {
    return (
      <div>
        <img src={this.state.backgrounds[this.state.backgroundIndex]} />
      </div>
    );
  }
}

export default App;
