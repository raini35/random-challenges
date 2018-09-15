import React, { Component } from 'react';
import Popup from "reactjs-popup";

class AddEntryButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDay: new Date()
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.submitEntry(this.input.value)
  }

  render() {
    let inputStyle = {
      'width': '97%'
    };
    let h2Style = {
      display: 'inline',
      marginRight: '10px'
    }
    return (
      <div style={{marginBottom: '10px'}}>
      <h2 style={h2Style}>{this.state.currentDay.toDateString()}</h2>
      <Popup
        trigger={open => (
          <button className="button">+</button>
        )}
        position="right center"
        closeOnDocumentClick
      >
        {close => (
          <div>
            <form onSubmit={(e) => {
              this.handleSubmit(e)
              close()
            }}>
                <input type="text" id="sname" name="sname" required
                  ref={input => this.input = input} placeholder="Enter Subject Name..." style={inputStyle} autoFocus/>
            </form>
          </div>
        )}
      </Popup>
      </div>
    );
  }

}

export default AddEntryButton;
