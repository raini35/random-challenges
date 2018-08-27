import React, {
  Component
} from 'react';
import Button from './Button';
import Pokemon from './Pokemon';
class App extends Component {
  {
    url: [
      {
        name: "",
        backgrounds:[
          
        ]
      }
    ]
  }
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
    listItems = [];
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
  // this.setState({
  //   backgrounds: [
  //     data.sprites.front_default,
  //     data.sprites.back_default,
  //     data.sprites.front_shiny,
  //     data.sprites.back_shiny
  //   ]
  // });
  // .then(() => {
  //   this.timeout = setTimeout(
  //     this.changeBackground,
  //     500
  //   );
  // })
  // <img src={this.state.backgrounds[this.state.backgroundIndex]} />
  // const listOfPokemon = this.state.pokemons.map((data) => {
  //   console.log(data);
  // });
  render() {
    // console.log(this.state);
    this.setState({const listItems = this.state.pokemons.map((number) =>
  <li>{number.name}</li>
);
    return (
      <div>
      <Button buttonName='Previous' url={this.state.prevUrl} handleClick={this.loadAllPokemon}/>
        <ul>{listItems}</ul>
      <Button buttonName='Next' url={this.state.nextUrl} handleClick={this.loadAllPokemon}/>
      </div>
    );
  }
}

export default App;
