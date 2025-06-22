function getComputerChoice() {
    let C_Choice = Math.random() * 100;

    if (C_Choice <= 35) {
        let ret1 = "rock";
        return ret1;
    } else if (C_Choice > 35 && C_Choice <= 70) {
        let ret2 = "paper";
        return ret2;
    } else if (C_Choice > 70 && C_Choice <= 100) {
        let ret3 = "scissor";
        return ret3;
    }
}

function humanChoice() {
    let Str = prompt("Enter your choice:");

    if(Str !== null){
        Str = Str.toLowerCase();
    }
}