let a = Math.floor(Math.random() * 100);
let guessesLeft = 10;

function checkGuess() {
  const userGuess = parseInt(document.getElementById('user-guess').value);
  const resultDiv = document.getElementById('result');
  const guessesLeftSpan = document.getElementById('guesses-left');

  if (isNaN(userGuess)) {
    resultDiv.innerText = 'Please enter a valid number.';
  } else {
    guessesLeft--;

    if (guessesLeft === 0) {
      resultDiv.innerText = `Sorry! You did not guess correctly. The correct number was ${a}.`;
      guessesLeftSpan.innerText = '0';
      document.getElementById('user-guess').disabled = true;
    } else if (userGuess === a) {
      resultDiv.innerText = `You guessed the number correctly! The correct number is ${a}.`;
      guessesLeftSpan.innerText = `${guessesLeft}`;
      document.getElementById('user-guess').disabled = true;
      // Apply bounce animation to the result
      resultDiv.classList.add('bounce-animation');
    } else if (userGuess < a) {
      resultDiv.innerText = `Your guess ${userGuess} is too low. Guess again!`;
      guessesLeftSpan.innerText = `${guessesLeft}`;
    } else {
      resultDiv.innerText = `Your guess ${userGuess} is too high. Guess again!`;
      guessesLeftSpan.innerText = `${guessesLeft}`;
    }
  }
}
