let scorePlayer = 0;
let scoreComputer = 0;

// Function to play the game
function play(playerChoice) {
    const choices = ['stone', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'stone' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'stone') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win!";
        scorePlayer++;
        document.getElementById('scorePlayer').innerText = scorePlayer;
    } else {
        result = "Computer wins!";
        scoreComputer++;
        document.getElementById('scoreComputer').innerText = scoreComputer;
    }

    alert(`Player: ${playerChoice}, Computer: ${computerChoice}\n${result}`);
}
