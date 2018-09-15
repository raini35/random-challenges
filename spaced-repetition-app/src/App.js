import React, { Component } from 'react';
import AddEntryButton from './components/AddEntryButton';
import QualityScoreButton from './components/QualityScoreButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getQRScore = this.getQRScore.bind(this);
  }

  createEntry(taskName) {
    let entry = {}
    entry.subject = taskName;
    entry.dateCreated = new Date();
    entry.n = 1;
    entry.ir = 1;
    entry.startDate = new Date(entry.dateCreated);
    entry.nextDate = new Date(entry.startDate);
    entry.nextDate.setDate(entry.nextDate.getDate() + entry.ir);
    entry.prevEF = 2.5;
    entry.qrScores = [];
    return entry;
  }

  handleSubmit(subjectName) {
    console.log(subjectName)
    let newEntry = this.createEntry(subjectName)
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newEntry]
    }))
  }

  getQRScore(value, index) {
    let taskArray = this.state.tasks;
    let editedTask = taskArray[index];
    console.log(this.state.tasks)
    editedTask.currentQR = value;
    editedTask.qrScores.push({
      qr: value,
      dateAdded: new Date()
    })
    this.setState((prevState) => ({
      tasks: taskArray
    }), () => {
      console.log(this.state.tasks)
    })

    return true
  }

  function updateNextDate(entry) {
    entry.nextDate = new Date(entry.startDate)
    entry.nextDate.setDate(entry.nextDate.getDate() + entry.ir)
    return true
  }

  //The following function calculates the new easiness factor (EF)
  // Input: previous easiness factor (prevEF) and quality score (qS)
  // Output: new easiness factor (newEF)
  function getEF(entry) {
    let newEF = entry.prevEF - 0.8 + (0.28 * entry.currentQR) - (0.02 * entry.currentQR * entry.currentQR)

    if (newEF <= 1.3) {
      newEF = 1.3
    }

    entry.prevEF = newEF;
    console.log("new prevEF: " + entry.prevEF);
    return newEF;
  }

  function getIrInterval(entry) {
    console.log("Updating inter-repeition interval...")
    if (entry.n == 2) {
      entry.ir = 6
    } else {
      console.log("N is larger than 2...")
      entry.ir =  Math.floor((entry.n - 1) * getEF(entry))
      console.log(entry.ir)
    }
  }

  function updateN(entry) {
    console.log("Updating entry...")
    if(entry.currentQR < 3) {
      entry.intervalStartDate = new Date();
      entry.n = 1
      entry.ir = 1
    } else {
      entry.n = entry.n + 1
    }
  }
  
  render() {
    let subjectsToStudy = this.state.tasks.map((x, index) => {
      return (
        <div>
          <div style={{'display':'inline-block', 'width':'50%'}}>{x.subject}</div>
          <div style={{'display':'inline-block', 'width':'25%', textAlign: 'center'}}>{x.nextDate.toDateString()}</div>
          <QualityScoreButton n={x.n} index={index} submitQRScore={this.getQRScore}/>
        </div>
      );
    })
    return (
      <div>
        <h1>Spaced Repetition App</h1>
        <AddEntryButton submitEntry={this.handleSubmit}/>
        <div style={{'width': '700px'}}>
          <div style={{borderBottom: 'double', fontWeight: 'bold'}}>
            <div style={{'display':'inline-block', 'width':'50%'}}>Task Name</div>
            <div style={{'display':'inline-block', 'width':'25%', textAlign: 'center'}}>Next Date</div>
            <div style={{'display':'inline-block', 'width':'25%', textAlign: 'center'}}>Day(s) Left</div>
          </div>
          {subjectsToStudy}
        </div>
      </div>
    );
  }

}

export default App;
