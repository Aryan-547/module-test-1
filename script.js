// ------------------Button-----------------


rulBtn = document.querySelector(".rules-btn");
let rulemodal = document.querySelector(".rules-modal");
let bund = document.querySelector(".close");

rulBtn.addEventListener("click", () => {
  rulemodal.style.display = "flex";
});

let close = document.querySelector(".close");
close.addEventListener("click", () => {
  rulemodal.style.display = "none";
});

let nextbtn = document.getElementById("next-btn");

// ------------------Score-BOard----------------
let userscore = JSON.parse(localStorage.getItem("us"))
let scoreuser = document.getElementById("user-score");
let pcscore = JSON.parse(localStorage.getItem("cs"))
let scorepc = document.getElementById("computer-score");

if(userscore){                                                     
  scoreuser.innerText=userscore;
}else if(pcscore){
  scorepc.innerText=pcscore;
}
let count=0;






let handOptions = {
  rock: "rock.png",
  paper: "paper.png",
  scissors: "scissor.png",
};



let pickUserHand = (hand) => {
  let hands = document.querySelector(".play-board");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  // set user Image
  document.getElementById("userPickImage").src = handOptions[hand];

  pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
  let hands = ["rock", "paper", "scissors"];
  let cpHand = hands[Math.floor(Math.random() * hands.length)];

  // set computer image
  document.getElementById("computerPickImage").src = handOptions[cpHand];

  referee(hand, cpHand);
};

const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    count=pcscore;
    count++;
    scorepc.innerText=count;
    localStorage.setItem("cs", JSON.stringify(count));
    setDecision("YOU LOSE!");
  }
  if (userHand == "paper" && cpHand == "rock") {
    count=userscore;
    count++;
    scoreuser.innerText=count;
    localStorage.setItem("us", JSON.stringify(count));
    setDecision("YOU WIN!");
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("It's a tie!");
  }
  if (userHand == "rock" && cpHand == "scissors") {
    count=userscore;
    count++;
    scoreuser.innerText=count;
    localStorage.setItem("us", JSON.stringify(count));
    setDecision("YOU WIN!");
  }
  if (userHand == "rock" && cpHand == "paper") {
    count=pcscore;
    count++;
    scorepc.innerText=count;
    localStorage.setItem("cs", JSON.stringify(count));
    setDecision("YOU LOSE!");
  }

  if (userHand == "rock" && cpHand == "rock") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "rock") {
    count=pcscore;
    count++;
    scorepc.innerText=count;
    localStorage.setItem("cs", JSON.stringify(count));
    setDecision("YOU LOSE!");
  }
  if (userHand == "scissors" && cpHand == "paper") {
    count=userscore;
    count++;
    scoreuser.innerText=count;
    localStorage.setItem("us", JSON.stringify(count));
    setDecision("YOU WIN!");
  }
};

let restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".play-board");
  hands.style.display = "";
};

let setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
};




// function myFunc() {
//   // window.location.href = "http://127.0.0.1:5500/winner.html";
// }

// function playAgain() {
//   // window.location.href = "http://127.0.0.1:5500/";
// }







