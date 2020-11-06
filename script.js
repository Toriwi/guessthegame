'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//Math.round() gives a secretNumber between 1 and 0. Multiplied by 20 it will give a jumber between 1 and 20.
//document.querySelector('.number').textContent = secretNumber;

let score = 20; //state variable - part of the application state - all the data that is relative to the app
let highscore = 0; //first score will always be higher score because it is > 0

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = +(document.querySelector('.guess').value)
  console.log(guess, typeof guess)
  //usually when we get an input from the user it is a string

  //when there is no input
  if (!guess) {
    //when guess is 0: !false = true
    //document.querySelector('.message').textContent = 'No number! 🛑'
    displayMessage('No number! 🛑')

    //when player wins
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉  Correct Number!'
    displayMessage('🎉  Correct Number!')

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347'

    document.querySelector('.number').style.widht = '30rem'

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guess is wrong
  else if (guess != secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent = guess > secretNumber ? '👠 Too high!' : '🛩  Too low!'
      displayMessage(guess > secretNumber ? '👠 Too high!' : '🛩  Too low!')
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = "💣 You lose the game!";
      displayMessage("💣 You lose the game!")
      document.querySelector('.score').textContent = 0;
    }
  }

  //when guess is too high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '👠 Too high!'
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = "💣 You lose the game!";
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     //when guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '🛩  Too low!'
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       console.log("💣 You lose the game!");
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
})


//new game 
document.querySelector('.again').addEventListener('click', function () {
  //restore initial values of message, number, score, guess input fields
  let score = 20;

  let secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...')

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?'

  document.querySelector('.guess').value = ''

  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'

});


//the function inside the eventHandler is just defined, not called. The js engine calls it asap the event happens.
//it is a function expression
//const x = function() {
//     console.log(23)
// } 