let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

//Start Game.
document.addEventListener("keypress", function () {
    if(started == false){
        console.log("Game Started");
        started = true;
    }
});
