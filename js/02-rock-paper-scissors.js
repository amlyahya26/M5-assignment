

function getUserChoice() {
    const userChoice = prompt("Enter your Choose ( rock, paper, or scissors: )").toLowerCase();
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
      return userChoice;
    } else {
      alert("Invalid choice! Please choose rock, paper, or scissors.");
      return getUserChoice(); 
    }
  }
  
  
  function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      return `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
      return `Computer wins! ${computerChoice} beats ${userChoice}.`;
    }
  }
  
  function playGame() {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    alert(result);
  }
  
  playGame();
  