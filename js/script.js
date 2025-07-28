// welcome the player and get name
let playerName = prompt('Welcome to Bear Ninja Hunter! Please enter your name:');

// alert to greet
alert(`Hello ${playerName}! Let's play Bear Ninja Hunter!`);

// prompt for the player's choice
let playerChoice = prompt('Choose your character: Bear, Ninja, or Hunter?');

// hard-coded computer choice
let computerChoice = 'Bear';

// create personalized message
let gameResults = `${playerName} chose ${playerChoice}. Computer chose ${computerChoice}.`;

// outpit to HTML page 
document.getElementById('demo').innerHTML = gameResults;

// output to console with concatenation
console.log(gameResults + ' This will be expanded in the next assignment.');

// different concatenation method
console.log(`Player: ${playerName}, Choice: ` + playerChoice + '!');