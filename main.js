
    const loginForm = document.getElementById('login-box');
    const emailInput = document.getElementById('emailInput');
    const gameScreen = document.getElementById('game-screen');
    const loginScreen = document.getElementById('login-screen');
    const greeting = document.getElementById('greeting');
    const userLabel = document.getElementById('user-label');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const passwordInput = document.querySelector('input[type="password"]');
        const password = passwordInput.value;
        const email = emailInput.value;

        if (password !== '223058' && password !== 'c223058') {
            alert('Incorrect password');
            return;
        }

        const username = email.split('@')[0]; 

        if (username===email.split('@gmail.com')) {
            alert('Invalid email format');
            return;
        }
        const formattedName = username.charAt(0).toUpperCase() + username.slice(1);

        greeting.innerHTML = `Hi, ${formattedName} 😎`;
        userLabel.textContent = `${formattedName}'s score:`;

        loginScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');
    });

    // Game Logic
    const buttons = document.querySelectorAll("#game-screen button");
    const resultEl = document.getElementById("result");
    const playerScoreEl = document.getElementById("user-score");
    const computerScoreEl = document.getElementById("computer-score");
    let playerScore = 0;
    let computerScore = 0;

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const result = playRound(button.id, computerPlay());
        resultEl.textContent = result;
      });
    });

    function computerPlay() {
      const choices = ["rock", "paper", "scissors"];
      const randomChoice = Math.floor(Math.random() * choices.length);
      return choices[randomChoice];
    }

    function playRound(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
        return "It's a tie!";
      } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
      ) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return "You win! " + playerSelection + " beats " + computerSelection;
      } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "You lose! " + computerSelection + " beats " + playerSelection;
      }
    }
