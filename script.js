function getComputerChoice() {
    let C_Choice = Math.random() * 100;

    if (C_Choice <= 35) {
        let ret = "rock";
        return ret;
    } else if (C_Choice > 35 && C_Choice <= 70) {
        let ret = "paper";
        return ret;
    } else if (C_Choice > 70 && C_Choice <= 100) {
        let ret = "scissor";
        return ret;
    }
    return ret;
}

function humanChoice() {
    let Str = prompt("Enter your choice:");

    if(Str !== null){
        Str = Str.toLowerCase();
    }
    return Str;
}

let HumanScore = 0;
let ComputerScore = 0;

function PlayRound (HumanChoice,ComputerChoice){
    if (HumanChoice === ComputerChoice){
        console.log("Tie!!");
    } else if ((HumanChoice === "rock" && ComputerChoice === "paper") || (HumanChoice === "scissor") && (ComputerChoice === "rock")){
        console.log("Computer Wins!!");
        ComputerScore ++;
    } else {
        console.log("Human wins!!")
        HumanScore ++;
    }
}

let Str = humanChoice ();
let ret = getComputerChoice ();
PlayRound(Str,ret);