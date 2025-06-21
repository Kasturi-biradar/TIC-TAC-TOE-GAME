let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");





choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
    let userChoice = choice.getAttribute("id");   
// console.log("the choice was clicked " , userChoice);
    playGame(userChoice)
    })
})


const genCompChoice = () => {
    //rock,paper,seissors
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);//Math.floor(Math.random(options) * 3);
    return options[randIdx];

}


const playGame = (userChoice) => {
// console.log("user choice = ", userChoice);
const compChoice = genCompChoice();
// console.log("comp choice = " , compChoice);
if(userChoice === compChoice) {
// console.log("Game was draw");
msg.innerText = "Game was draw.Play Again!";
msg.style.backgroundColor = "#081b31";
} else {
let userWin = true;
if(userChoice === "rock") {
userWin= compChoice === "paper" ? false : true;
}else if(userChoice === "paper") {
userWin = compChoice === "scissors"   ? false : true;
}else{
userWin = compChoice === "rock" ? false : true;
}
showWinner(userWin,userChoice,compChoice);
}
}



const showWinner = (userWin,userChoice,compChoice) => {
   if(userWin === true) {
    userScore++;
    userScorePara.innerText = userScore;
    // console.log("You win!");
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "blue";
   }else {
    compScore++;
    compScorePara.innerText = compScore;
    // console.log("comp win");
    msg.innerText = `You Lose,Comp Win!  ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
   }
}


