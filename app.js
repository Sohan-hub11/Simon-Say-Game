let gameSeq = [];
let userSeq = [];

let btn = ["red", "yellow", "green", "purple"];
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
    let randomColor = btn[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);
    btnflash(randomBtn);
    console.log(randomIndex);
    console.log(randomColor);
    console.log(randomBtn);
}

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 280);
}