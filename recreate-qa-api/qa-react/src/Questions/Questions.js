import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import LoadingScreen from 'react-loading-screen';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      loading: true
    };
  }

  async componentDidMount() {
    const questions = (await axios.get('http://localhost:8081')).data;
    setTimeout(() =>
  this.setState({ loading: false })
, 1500)
    this.setState({
      questions,
    });
  }

  render() {
    const { loading } = this.state

    return (
      <LoadingScreen
        loading={loading}
        bgColor='#f1f1f1'
        spinnerColor='#9ee5f8'
        textColor='#676767'
        logoSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/250px-React-icon.svg.png'
        text='Loading questions...'
      >
        <div className="container">
          <div className="row">
            {
              this.state.questions && this.state.questions.map(question => (
                <div className="col-sm-12 col-md-4 col-lg-3">
                  <Link to={`/question/$question.id`}>
                    <div className="card text-white bg-success mb-3">
                      <div className="card-header">Answers: {question.answer}</div>
                      <div className="card-body">
                        <h4 className="card-title">{question.title}</h4>
                        <div className="card-text">{question.description}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </LoadingScreen>
    );
  }

}

export default Questions;
