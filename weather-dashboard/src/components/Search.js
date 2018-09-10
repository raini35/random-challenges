import React, { Component } from 'react'

class Search extends Component {
 handleSubmit = (event) => {
   event.preventDefault();
   this.props.submitCity(this.search.value);
 }

 render() {
   return (
     <form onSubmit={e => { this.handleSubmit(e); }}>
       <input
         placeholder="Enter new city..."
         ref={input => this.search = input}
       />
     </form>
   )
 }
}

export default Search
