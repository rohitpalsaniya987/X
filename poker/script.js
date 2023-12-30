document.addEventListener('DOMContentLoaded', function () {
  const diceElement = document.getElementById('dice');
  const rollBtn = document.getElementById('roll-btn');
  const guessInput = document.getElementById('guess');
  const moneyDisplay = document.getElementById('money-display');
  const gameStatus = document.getElementById('game-status');
  const rulesDiv = document.getElementById('rules');
  const closeRulesBtn = document.getElementById('close-rules');

  let totalMoney = 1000;

  rollBtn.addEventListener('click', rollDice);

  if (closeRulesBtn) {
    closeRulesBtn.addEventListener('click', function () {
      // Toggle the visibility of the rules div
      if (rulesDiv.style.display === 'none' || rulesDiv.style.display === '') {
        rulesDiv.style.display = 'block';
      } else {
        rulesDiv.style.display = 'none';
      }
    });
  } else {
    console.warn('close-rules button not found!');
  }

  // Ensure rulesDiv is initially visible
  rulesDiv.style.display = 'block';

  function rollDice() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 6) {
      showGameStatus("Please enter a valid number between 1 and 6.");
      return;
    }

    if (totalMoney <= 0) {
      showGameStatus("You don't have enough money to play. Game over!");
      return;
    }

    diceElement.classList.remove('animated');
    void diceElement.offsetWidth;
    diceElement.classList.add('animated');

    const randomNumber = generateRandomNumber(1, 6);
    diceElement.textContent = randomNumber;

    if (userGuess === randomNumber) {
      showFireworks();
      vibrateDice();
      totalMoney += 300;
      showGameStatus("Congratulations! You guessed correctly. $300 deposited!");
    } else {
      totalMoney -= 50;
      showGameStatus("Oops! Your guess was incorrect. $50 deducted.");
    }

    updateMoneyDisplay(totalMoney);

    if (totalMoney <= 0) {
      showGameStatus("You've run out of money. Game over!");
    }
  }

  function showGameStatus(message) {
    gameStatus.textContent = message;
    setTimeout(() => {
      gameStatus.textContent = "";
    }, 2000);
  }

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function showFireworks() {
    diceElement.style.backgroundColor = '#ffcc00';

    setTimeout(() => {
      diceElement.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    }, 1000);
  }

  function vibrateDice() {
    anime({
      targets: diceElement,
      translateX: [-5, 5],
      translateY: [-5, 5],
      duration: 100,
      easing: 'linear',
      loop: 5,
    });

    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100, 50, 100]);
    }
  }

  function updateMoneyDisplay(money) {
    moneyDisplay.textContent = `$${money}`;

    if (money > 1000) {
      moneyDisplay.style.color = 'green';
    } else if (money < 1000) {
      moneyDisplay.style.color = 'red';
    } else {
      moneyDisplay.style.color = 'white';
    }
  }
});
