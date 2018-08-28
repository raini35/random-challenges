import React, {
  Component
} from 'react';
import Button from './Button';
import Pokemon from './Pokemon';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundIndex: 0,
      pokemons: [],
      prevUrl: "",
      nextUrl: "",
      listItems: "",
    }
    this.changeBackground = this.changeBackground.bind(this);
    this.loadAllPokemon = this.loadAllPokemon.bind(this);
    this.loadEachPokemon = this.loadEachPokemon.bind(this);
  }

  changeBackground() {
    this.setState(function({
      backgroundIndex
    }) {
      const nextBackgroundIndex = ++backgroundIndex % this.state.backgrounds.length

      return {
        backgroundIndex: nextBackgroundIndex
      }
    }, function() {
      this.timeout = setTimeout(
        this.changeBackground,
        500
      )
    })
  }

  loadAllPokemon(url) {
    if(url == null) {
      console.log('No url')
    } else {
    console.log(url);
    fetch(url)
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({
          prevUrl: data.previous,
          nextUrl: data.next
        });
        this.loadEachPokemon(data);
      });
    };
  }

  loadEachPokemon(data) {
    console.log(data)
    let x = /offset=([0-9]+)/g
    let num = /([0-9+])/g
    let m = data.match(x);
    let number = m.match(num);
    console.log(m);
    console.log(number);

    data.results.forEach(x => {
      fetch(x.url)
        .then(results => {
          return results.json();
        })
        .then(data => {
          let new_pokemon = {
            name: data.name,
            backgrounds: [
              data.sprites.front_default,
              data.sprites.back_default,
              data.sprites.front_shiny,
              data.sprites.back_shiny
            ]
          };
          this.setState((prevState, props) => {
            return {pokemons: [...prevState.pokemons, new_pokemon]};
          });
        });
    });
  }

  componentDidMount() {
    this.loadAllPokemon('https://pokeapi.co/api/v2/pokemon-form/');
  }

  render() {
    let listOfItems = this.state.pokemons.map(x => {
      return <li>{x.name}</li>
    })
    return (
      <div>
      <Button buttonName='Previous' url={this.state.prevUrl} handleClick={this.loadAllPokemon}/>
        <ul>{listOfItems}</ul>
      <Button buttonName='Next' url={this.state.nextUrl} handleClick={this.loadAllPokemon}/>
      </div>
    );
  }
}

export default App;
