const getUserChoice = userInput => {
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
     return userInput;
      } else {
        console.log ('Error, try again please.');
      }
}
  
  
const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3) 
    switch (randomNumber) {
      case 0:
      return 'rock';
      case 1:
      return 'paper';
      case 2:
      return 'scissors';
    }
}
  
  
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'tie';
    } 
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer won';
    } else {
        return 'User won';
      } 
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer won';
      } else {
        return 'User won';
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer won';
      } else {
        return 'User won';
      }
    }
}
  
  
const playGame = () => {
    const userChoice = getUserChoice ('paper');
    const computerChoice = getComputerChoice();
    console.log (`You threw: ${userChoice}`);   
    console.log (`The computer threw: ${computerChoice}`); 
    console.log ();
  
  console.log (determineWinner(userChoice, computerChoice));
};

playGame();