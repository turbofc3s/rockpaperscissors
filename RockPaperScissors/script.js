
/* winning conditions needed
variable to store number of wins for computer
variable to store number of wins for user
*/
const playerText = document.getElementById("playerText")
const computerText = document.getElementById("computerText")
const resultText = document.getElementById("resultText")
const choicebtns = document.querySelectorAll(".choicebtn")

let player;
let computer;
let result;

choicebtns.forEach(button => button.addEventListener('click', () => {

	player = button.textContent;
	computerTurn();
	playerText.textContent = `Player: ${player}`;
	computerText.textContent = `Computer: ${computer}`;
	resultText.textContent = checkWinner();
}));

function computerTurn() {

	const randNum = Math.floor(Math.random() * 3) + 1;

	switch(randNum) {
		case 1:
		 computer = "ROCK";
		 break;
		case 2:
		 computer = "PAPER";
		 break;
		case 3:
		 computer = "SCISSORS";
		 break;
	}
} 
function checkWinner() {
	if (player == computer) {
		return "Draw!";

	}
	else if (computer == "ROCK") {
		return (player == "PAPER") ? "You win!" : "You lose!"
	}
	else if (computer == "PAPER") {
 		return (player == "SCISSORS") ? "You win!" : "You lose!"
	}
	else if (computer == "SCISSORS") {
		return (player =="ROCK") ? "You win!" : "You lose!"
	}		 		
};
