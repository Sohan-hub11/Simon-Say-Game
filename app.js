let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

//Start Game.
document.addEventListener("keypress", function () {
    if(started == false){
        console.log("Game Started");
        started = true;

        levelUp();
    }
});

//btn-flashing and updating the Level.
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //select random btn.
    let randomIndex = Math.floor(Math.random()*3);
    let randomColor = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameFlash(randomBtn);
    // console.log(randomIndex);
    // console.log(randomColor);
    // console.log(randomBtn);
    gameSeq.push(randomColor);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 280);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 280);
}

//btn press(Event Listner).
function btnPress() {
    //console.log("Button was pressed");
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

//Matching Sequence.
function checkAns(idx) {
    if(gameSeq[idx] === userSeq[idx]){
        // console.log("Same Color");
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your Score was <b>${level-1}</b> <br>Please press any key to Start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "rgb(246, 237, 117)";
        },150);
        resetGame();
    }
}

//Resetting the game.
function resetGame(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}