import React, { Component } from 'react'

class Search extends Component {
 state = {
   query: '',
 }

 handleInputChange = (event) => {
   this.setState({
     query: this.search.value
   })
 }

 handleSubmit = (event) => {
   console.log(this.search.value)
   event.preventDefault();
 }

 render() {
   return (
     <form onSubmit={e => { this.handleSubmit(e); }}>
       <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={e => this.handleInputChange(e)}
       />
       <p>{this.state.query}</p>
     </form>
   )
 }
}

export default Search


// import React, { Component } from 'react'
//
// class Search extends Component {
//  state = {
//    query: '',
//    submitCity: this.props.submitCity
//  }
//
//  submitQuery = (event) => {
//    if(event.key === 'Enter') {
//      event.preventDefault();
//      this.state.submitCity(this.state.query)
//      this.setState({
//        query: ''
//      },() => {
//       this.search.value = '';
//     });
//   } else {
//     console.log(event.key);
//     console.log(this.search.value);
//     this.setState({
//         query: this.search.value
//       }, () => {
//         console.log(this.state.query);
//       })
//   }
//  }
//
//  // handleInputChange = () => {
//  //   console.log(this.search.value)
//  //   // this.setState({
//  //   //   query: this.search.value
//  //   // }, () => {
//  //   //   console.log(this.state.query);
//  //   // })
//  // }
//
//  render() {
//    return (
//      <form>
//        <input
//          placeholder="Search for..."
//          ref={input => this.search = input}
//          onKeyPress={this.submitQuery}
//        />
//        <p>{this.state.query}</p>
//      </form>
//    )
//  }
// }
//
// export default Search
