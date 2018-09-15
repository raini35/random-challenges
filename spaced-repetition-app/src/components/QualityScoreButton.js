import React, { Component } from 'react';
import Popup from "reactjs-popup";

class AddEntryButton extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(value, index) {
    console.log("Button was clicked.")
    this.props.submitQRScore(value, index)
  }

  render() {
    return (
      <Popup
        trigger={open => (<div style={{'display':'inline-block', 'width': '25%', 'cursor':'pointer', backgroundColor: 'rgb(235, 69, 17)', textAlign: 'center'}}>{this.props.n}</div>)}
        on="click"
        position="right center"
        contentStyle={{'width': '164px'}}
        closeOnDocumentClick
      >
        {close => (
          <div style={{'display': 'flex', justifyContent: 'space-between'}}>
            <button onClick={() => this.handleSubmit(1, this.props.index)}>1</button>
            <button onClick={() => this.handleSubmit(2, this.props.index)}>2</button>
            <button onClick={() => this.handleSubmit(3, this.props.index)}>3</button>
            <button onClick={() => this.handleSubmit(4, this.props.index)}>4</button>
            <button onClick={() => this.handleSubmit(5, this.props.index)}>5</button>
          </div>
        )}
      </Popup>
    );
  }

}

export default AddEntryButton;
