// X or O
// change X and O
// check winning condition
// implement draw
// vanish the width to zero 

let player = 'X';
let gameOver = false;

const changePlayer = () => {
    return player === 'X'? "O" : "X";
}

const checkWon = () => {
    let boxTexts = document.getElementsByClassName("boxText");
    let winPos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    winPos.forEach(element => {
        if(boxTexts[element[0]].innerText === boxTexts[element[1]].innerText && boxTexts[element[1]].innerText === boxTexts[element[2]].innerText && boxTexts[element[0]].innerText !== ""){
            document.getElementById("result").innerText = "Hurray! " +  boxTexts[element[0]].innerText + " Won!!";
            gameOver = true;
            // document.querySelector("img").style.width = "100px";
        }
    })
};

let boxes = document.getElementsByClassName("box");
console.log(boxes);
// console.log(boxes.length)
Array.from(boxes).forEach(box =>{
    let boxText = box.querySelector(".boxText");
        box.addEventListener("click", ()=>{
            if(boxText.innerText === "" && !gameOver){
            boxText.innerText = player;
            player = changePlayer();
            checkWon();
            document.getElementsByClassName("player")[0].innerText = player;
        }
    });
});

// reset button
let reset = document.getElementsByClassName("reset")[0];
// console.log(reset);
reset.addEventListener("click", () => {
    let boxTexts = document.querySelectorAll(".boxText");
    // console.log(boxTexts);
    boxTexts.forEach(boxText =>{
        boxText.innerText = "";
    })
    player = "X";
    gameOver = false;
    document.getElementById("result").innerText = "";
})

var timeoutId = 0;

var timer = () => {
    var currentTime = document.getElementById("time").innerHTML; // 00:00
    
    var min = parseInt(currentTime.split(":")[0]);
    var sec = parseInt(currentTime.split(":")[1]);

    currentTime = min * 60 + sec;
    currentTime++;
    min = Math.floor(currentTime/60);
    sec = currentTime%60;

    currentTime = min.toString().padStart(2, '0').concat(":").concat(sec.toString().padStart(2, '0'));
    document.getElementById("time").innerHTML = currentTime;

    timeoutId = setTimeout(timer, 1000);
}

var stopTimer = () => {
    var time = document.getElementById('time').innerHTML;
    clearTimeout(timeoutId);
}

var resetTimer= () => {
    var currentTime = document.getElementById("time").innerHTML;
    currentTime = "00:00";
    document.getElementById("time").innerHTML = currentTime;
    clearTimeout(timeoutId);
}

