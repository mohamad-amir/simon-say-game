let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let colors = ["red", "yellow", "green", "purple"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!started) {
        started = true;
        levelUp();
    }
});

function levelUp() {

    userSeq = [];
    level++;

    h2.innerText = `Level ${level}`;

    let randomIndex = Math.floor(Math.random() * 4);
    let randomColor = colors[randomIndex];

    gameSeq.push(randomColor);

    let btn = document.querySelector(`#${randomColor}`);
    btnFlash(btn);
}

function btnFlash(btn) {
    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

let allBtns = document.querySelectorAll(".btn");

for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function btnPress() {

    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAnswer(userSeq.length - 1);
}

function checkAnswer(index) {

    if (userSeq[index] === gameSeq[index]) {

        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }

    } else {

        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to restart`;

        reset();
    }
}

function reset() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}