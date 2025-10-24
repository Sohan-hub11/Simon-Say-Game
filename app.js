let gameSeq = [];
let userSeq = [];

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

}