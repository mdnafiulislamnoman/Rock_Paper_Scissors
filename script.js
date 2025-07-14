//Declaring clicked button message
let btn_msg = "";

//Making computer choice function
function getComputerChoice() {
    let C_Choice = Math.random() * 100;

    if (C_Choice <= 35) {
        return "rock";
    } else if (C_Choice <= 70) {
        return "paper";
    } else {
        return "scissor";
    }
}


// Making human choice function
function humanChoice() {
    return btn_msg.toLowerCase();
}

// Declaring Score count
let HumanScore = 0;
let ComputerScore = 0;

//Main playing function
function PlayRound(HumanChoice, ComputerChoice) {
    if (HumanChoice === ComputerChoice) {
        resultDiv.textContent = "It's a Tie!";
    } else if ((HumanChoice === "rock" && ComputerChoice === "paper") ||
        (HumanChoice === "scissor" && ComputerChoice === "rock") ||
        (HumanChoice === "paper" && ComputerChoice === "scissor")) {
        resultDiv.textContent = "Computer wins!!";
        ComputerScore++;
    } else {
        resultDiv.textContent = "You win this round!!";
        HumanScore++;
    }
    scoreDiv.textContent = `Human: ${HumanScore} | Computer: ${ComputerScore}`;
}

function startGame(){
    let human = humanChoice ();
    let computer = getComputerChoice();
    PlayRound (human,computer);
}

//DOM starts here:

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");

rock.addEventListener('click', () => {
    btn_msg = "rock";
    startGame();
});
paper.addEventListener('click', () => {
    btn_msg = "paper";
    startGame();
});
scissor.addEventListener('click', () => {
    btn_msg = "scissor";
    startGame();
});

