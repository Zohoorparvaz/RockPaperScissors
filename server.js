const express = require('express');
const app = express();
const port = 3000;

app.get('/play', (req, res) => {
  console.log('somebody wants to play');
  console.log('They have given us ', req.query);
  let playersChoice = req.query.choice;
  console.log('The choice is ' + playersChoice);

  let gameResultMessage =
    'Welcome to Rock-Paper-Scissors. Please use ?Choice= send your choice';
  let computerChoiceNumber = Math.floor(Math.random() * 3);

  if (computerChoiceNumber === 0) {
    console.log('The computer chose rock!');
    if (playersChoice === 'rock') {
      gameResultMessage = 'The Computer choice was Rock too. It is a tie!';
    }
    if (playersChoice === 'paper') {
      gameResultMessage = 'The Computer choice was Rock. you win!';
    }
    if (playersChoice === 'scissors') {
      gameResultMessage = 'The Computer choice was Rock. The computer wins!';
    }
  }
  if (computerChoiceNumber === 1) {
    console.log('The computer chose paper!');

    if (playersChoice === 'rock') {
      gameResultMessage = 'The Computer choice was paper . the computer wins!';
    }
    if (playersChoice === 'paper') {
      gameResultMessage = 'The Computer choice was paper too. It is a tie!';
    }
    if (playersChoice === 'scissors') {
      gameResultMessage = 'The Computer choice was paper. you win';
    }
  }
  if (computerChoiceNumber === 2) {
    console.log('The computer chose scissors!');

    if (playersChoice === 'rock') {
      gameResultMessage = 'The Computer choice was rock. the Computer wins!';
    }
    if (playersChoice === 'paper') {
      gameResultMessage =
        'The Computer choice was scissors. The computer wins!';
    }
    if (playersChoice === 'scissors') {
      gameResultMessage = 'The Computer choice was scissor too. it is a tie!';
    }
  }

  res.send(gameResultMessage);
});

app.get('/', (req, res) => {
  res.send('Hello please use /play to start!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
