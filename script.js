var rockBtn = document.getElementById('rock');
var paperBtn = document.getElementById('paper');
var scissorsBtn = document.getElementById('scissors');

var userScoreDisplay = document.getElementById('userScore');
var compScoreDisplay = document.getElementById('compScore');

var userSelectionImg = document.getElementById('userSelectionImg');
var compSelectionImg = document.getElementById('compSelectionImg');

let compChoice;
let compSymbol;
let userScore = 0;
let compScore = 0;

function generateCompChoice() {
    compChoice = Math.ceil(Math.random() * 3);
    console.log(compChoice);
    switch (compChoice) {
        case 1:
            compSelectionImg.src = './assets/rock-hand.png';
            compSymbol = 'r';
            break;
        case 2:
            compSelectionImg.src = './assets/paper-hand.png';
            compSymbol = 'p';
            break;
        case 3:
            compSelectionImg.src = './assets/scissors-hand.png';
            compSymbol = 's';
            break;
        default:
            compSelectionImg.src = '';
    }
}

rockBtn.addEventListener('click', () => {
    userSelectionImg.src = './assets/rock-hand.png';
    playRound('r');
});

paperBtn.addEventListener('click', () => {
    userSelectionImg.src = './assets/paper-hand.png';
    playRound('p');
});

scissorsBtn.addEventListener('click', () => {
    userSelectionImg.src = './assets/scissors-hand.png';
    playRound('s');
});

function playRound(userChoice) {
    generateCompChoice();

    if (
        (userChoice === 'r' && compSymbol === 's') ||
        (userChoice === 'p' && compSymbol === 'r') ||
        (userChoice === 's' && compSymbol === 'p')
    ) {
        userScore += 1;
    } else if (userChoice === compSymbol) {
        userScore += 0;
    } else {
        compScore += 1;
    }

    userScoreDisplay.textContent = userScore;
    compScoreDisplay.textContent = compScore;

    determineWinner();
}

function determineWinner() {
    var winnerText = document.getElementById('winnerText');

    if (userScore === 5) {
        winnerText.innerHTML = 'You';
    } else if (compScore === 5) {
        winnerText.innerHTML = 'Computer';
    }
}

var playAgainBtn = document.querySelector('.playAgainBtn');

playAgainBtn.addEventListener('click', () => {
    window.location.href = './gameend.html';
});
