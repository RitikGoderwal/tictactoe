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

