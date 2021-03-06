const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const questions = [];

app.use(helmet());
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors());

app.get('/', (req, res) => {
  const qs = questions.map(q => ({
    id: q.id,
    title: q.title,
    description: q.description,
    answers: q.answers.length
  }));

  res.send(qs);
})

app.get('/:id', (req, res) => {
  const question = questions.filter(q => (parseInt(q.id) === req.params.id));
  if (question.length > 1) return res.sendStatus(500);
  if (question.length === 0) return res.sendStatus(400);

  res.send(question[0]);
})

app.post('/', (req, res) => {
  const {title, description} = req.body;

  const newQuestion = {
    id: questions.length + 1,
    title,
    description,
    answers: []
  }

  questions.push(newQuestion);

  res.sendStatus(200);

})

app.post('/answer/:id', (req, res) => {
  const {answer} = req.body;
  const question = questions.filter(q => (parseInt(q.id) === req.params.id));
  if (question.length > 1) return res.sendStatus(500);
  if (question.length === 0) return res.sendStatus(400);

  question[0].answers.push({
    answer
  });

  res.sendStatus(200);
})

app.listen('8081', () => {
  console.log('Listening on port 8081')
})
