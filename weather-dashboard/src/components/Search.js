import React, { Component } from 'react'

class Search extends Component {
 state = {
   query: '',
   submitCity: this.props.submitCity
 }

 submitQuery = (event) => {
   if(event.key === 'Enter') {
     event.preventDefault();
     this.state.submitCity(this.state.query)
     this.setState({
       query: ''
     },() => {
      this.search.value = '';
    });
  } else {
    console.log(event.key);
    console.log(this.search.value);
    this.setState({
        query: this.search.value
      }, () => {
        console.log(this.state.query);
      })
  }
 }

 // handleInputChange = () => {
 //   console.log(this.search.value)
 //   // this.setState({
 //   //   query: this.search.value
 //   // }, () => {
 //   //   console.log(this.state.query);
 //   // })
 // }

 render() {
   return (
     <form>
       <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onKeyPress={this.submitQuery}
       />
       <p>{this.state.query}</p>
     </form>
   )
 }
}

export default Search
