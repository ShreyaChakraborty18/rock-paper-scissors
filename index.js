let nextB = document.querySelector("#next");
nextB.style.display = "none";

const winPlay = document.querySelector("#win-play-again");

let userHandImg = document.getElementById("user-picked");
let computerHandImg = document.getElementById("computer-picked");

let userScore = Number(localStorage.getItem("userScore"));
let ComScore = Number(localStorage.getItem("computerScore"));

if (userScore === null) {
    localStorage.setItem("userScore", 0);
    userScore = 0;
  }
  if (ComScore === null) {
    localStorage.setItem("computerScore", 0);
    ComScore = 0;
  }

let container = document.querySelector(".container");

let footer = document.querySelector(".footer");

let container2 = document.querySelector(".congrats-page");
container2.style.display = "none";

const select = (hand) => {
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  document.getElementById("user-picked").src = `./assets/${hand}.png`;

  let computerHand = computerChose();
  document.getElementById(
    "computer-picked"
  ).src = `./assets/${computerHand}.png`;

  compareHands(hand, computerHand);
};

const updateScore = (uScore, cScore) => {
  let userScoreElem = document.querySelector("#num2");
  let computerScoreElem = document.querySelector("#num1");
  userScoreElem.textContent = uScore;
  computerScoreElem.textContent = cScore;
};

const playAgain = () => {
  let hands = document.querySelector(".hands");
  let contest = document.querySelector(".contest");
  contest.style.display = "none";
  hands.style.display = "flex";
  nextB.style.display = "none";
  userHandImg.classList.remove("green-background");
  computerHandImg.classList.remove("green-background");

};

const computerChose = () => {
  let hands = ["Rock", "Paper", "Scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return hands[randomNum];
};

const compareHands = (userChoice, computerChoice) => {
  let winner = document.querySelector("#result");
  if (userChoice === computerChoice) {
    winner.textContent = "TIE UP";
    document.querySelector("h5").textContent = "";
    return;
  } else {
    document.querySelector("h5").textContent = "AGAINST PC";
  }

  if (userChoice === "Rock") {
    if (computerChoice === "Scissors") {
      winner.textContent = "YOU WIN";
      userHandImg.classList.add("green-background");
      nextB.style.display = "flex";
      userScore += 1;
      localStorage.setItem("userScore", userScore);
      console.log("updated userScore:", userScore);
      updateScore(userScore, ComScore);
      return;
    } else {
      winner.textContent = "YOU LOST";
      computerHandImg.classList.add("green-background");
      ComScore += 1;
      localStorage.setItem("computerScore", ComScore);

      updateScore(userScore, ComScore);
      return;
    }
  }
  if (userChoice === "Paper") {
    if (computerChoice === "Scissors") {
      winner.textContent = "YOU LOST";
      computerHandImg.classList.add("green-background");
      ComScore += 1;
      localStorage.setItem("computerScore", ComScore);
      updateScore(userScore, ComScore);
      return;
    } else {
      winner.textContent = "YOU WIN";
      userHandImg.classList.add("green-background");
      nextB.style.display = "flex";
      userScore += 1;
      localStorage.setItem("userScore", userScore);
      console.log("updated userScore:", userScore);
      updateScore(userScore, ComScore);
      return;
    }
  }
  if (userChoice === "Scissors") {
    if (computerChoice === "Rock") {
      winner.textContent = "YOU LOST";
      computerHandImg.classList.add("green-background");
      ComScore += 1;
      localStorage.setItem("computerScore", ComScore);
      updateScore(userScore, ComScore);
      return;
    } else {
      winner.textContent = "YOU WIN";
      userHandImg.classList.add("green-background");
      nextB.style.display = "flex";
      userScore += 1;
      localStorage.setItem("userScore", userScore);
      console.log("updated userScore:", userScore);

      updateScore(userScore, ComScore);
      return;
    }
  }
};

const showContainer = () => {
  container.style.display = "flex";
  footer.style.display = "flex";
  winPlay.style.display = "none";

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
  let contest = document.querySelector(".contest");
  contest.style.display = "none";
  updateScore(userScore, ComScore);
  nextB.style.display = "none";
  container2.style.display = "none";
};

const winContainer = () => {
  container.style.display = "none";
  footer.style.display = "none";
  winPlay.style.display = "flex";
  container2.style.display = "flex";
  userHandImg.classList.remove("green-background");
  computerHandImg.classList.remove("green-background");
};
  
  
let ruleBox = document.querySelector("#ruleBox");
ruleBox.style.display = "none";
const hideRule = () => {
  ruleBox.style.display = "none";
};

const showRules = () => {
  ruleBox.style.display = "flex";
};

updateScore(userScore, ComScore);
