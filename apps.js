const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgContainer = document.querySelector(".msg_container");
const uS = document.querySelector("#user-score");
const cS = document.querySelector("#comp-score");
const rS= document.querySelector("#reset_score");
let userScore = 0;
let compScore = 0;

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

const compChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    return options[idx];
}

const playGame = (userChoice) => {
    let computerChoice = compChoice();

    if (userChoice == computerChoice){
        msg.innerText = "Draw, play again";
        msgContainer.style.backgroundColor = "blue";
    } else {
        let userWin = true;

        if (userChoice == "rock"){
            userWin = computerChoice == "paper" ? false : true;
        } else if (userChoice == "paper"){
            userWin = computerChoice == "scissors" ? false : true;
        } else {
            userWin = computerChoice == "rock" ? false : true;
        }

        showWinner(userWin);
    }
}

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        uS.innerText = userScore;
        msg.innerText = "You won!";
        msgContainer.style.backgroundColor = "green";
    } else {
        compScore++;
        cS.innerText = compScore;
        msg.innerText = "You lost.";
        msgContainer.style.backgroundColor = "red";
    }
}

const resetScore = () => {
    uS.innerText = 0;
    cS.innerText = 0;
    userScore = 0;
    compScore = 0;
}

rS.addEventListener("click", resetScore);