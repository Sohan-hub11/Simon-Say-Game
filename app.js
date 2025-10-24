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
    level++;
    h2.innerText = `Level ${level}`;

    //select random btn.
    let randomIndex = Math.floor(Math.random()*3);
    let randomColor = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameFlash(randomBtn);
    console.log(randomIndex);
    console.log(randomColor);
    console.log(randomBtn);
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
    console.log("Button was pressed");
    let btn = this;
    userFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

