const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const questions = []

app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());

app.get('/', (req,res) => {
  const qs = questions.map(q => ({
    id: q.id,
    title: q.title,
    description: q.description,
    answers: q.answers.length
  }))

  res.send(qs);
})

app.get('/:id', (req, res) => {
  console.log('Getting specific question');
  const question = questions.filter(q => (q.id === parseInt(req.params.id)));
  if(question.length > 1) return res.sendStatus(500);
  if(question.length === 0) return res.sendStatus(400);
  res.send(question[0])
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
  console.log("Entering answer")
  const {answer} = req.body;

  const question = questions.filter(q => (q.id === parseInt(req.params.id)));
  if (question.length > 1) return res.status(500).send();
  if (question.length === 0) return res.status(404).send();

  question[0].answers.push({
    answer,
  });

  res.status(200).send();
});


app.listen(8081, () => {
  console.log('Listening on port 8081')
})
