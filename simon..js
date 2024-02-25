// step 1 (press any key to start the game)
let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"]

let started = false; // the game is not yet started
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () { // if any key is pressed, the game will get started
   if(started == false) {
    // console.log("Game is started");
    started = true;

    leveUp();
   }
});

// step-2 (btn flash + level 1)

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250 ); // to make the color flash for 1 sec
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 250 ); // to make the color flash for 1 sec
}

function leveUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;


    //when random color is choose
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randBtn);
    // console.log(randIdx);
    // console.log(randColor);
    gameSeq.push(randColor);
    // console.log(gameSeq);
    gameFlash(randBtn);
}

// Check ans 
function checkAns(idx){
    //console.log("curr level :", level);
    // let idx = level - 1; // if we write the then the game will get leveled up when the button is pressed

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(leveUp, 1000);  // time out is used to see color to be clicked
        }
        // console.log("same value");
    } else {
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();

    }
}


// step-3 button press
function btnPress () {
    // console.log(this)
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

// step - 4 : to restart the game 
function reset() {
let gameSeq = [];
let userSeq = [];
let started = false; 
let level = 0;
}