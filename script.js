function getComputerChoice (){
    let C_Choice = Math.random() * 100;
    
    if (C_Choice <= 35){
        return "Rock";
    } else if (C_Choice > 35 && C_Choice <= 70){
        return "Paper";
    } else if (C_Choice > 70 && C_Choice <= 100){
        return "Scissor";
    }
}