let countdownEl = document.getElementById('countdown');
let startTime = 25;
let time = startTime * 60;
let timer;

function changeTimeValue(remainingTime) {
    document.getElementById('countdown').innerHTML = `${remainingTime}:00`;
    startTime = remainingTime;
    time = remainingTime * 60;
}

function startTimer() {
    timer = setInterval(updateCountdown, 1000);
    document.getElementById("startButton").onclick = stopTimer;
    document.getElementById('startButton').innerHTML = 'Stop';
}

function updateCountdown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;

    if (time > 0)
        time--;
    else
        resetTimer();
}

function stopTimer() {
    clearInterval(timer);
    document.getElementById("startButton").onclick = startTimer;
    document.getElementById('startButton').innerHTML = 'Start';
}

function resetTimer() {
    clearInterval(timer);
    stopTimer();
    changeTimeValue(startTime);
}

function changeBackgroundColor(mode) {
    switch (mode) {
        case 25:
            document.body.style.background = 'linear-gradient(to right top, var(--red), var(--darkRed))';
            document.getElementById("startButton").style.color = "var(--darkRed)";
            document.getElementById("resetButton").style.color = "var(--darkRed)";
            resetButtonClass();
            document.getElementById("btn-work").className = "button0";
            break;
        case 5:
            document.body.style.background = 'linear-gradient(to right top, var(--blue), var(--darkBlue))';
            document.getElementById("startButton").style.color = "var(--darkBlue)";
            document.getElementById("resetButton").style.color = "var(--darkBlue)";
            resetButtonClass();
            document.getElementById("btn-short").className = "button0";

            break;
        case 15:
            document.body.style.background = 'linear-gradient(to right top, var(--green), var(--darkGreen))';
            document.getElementById("startButton").style.color = "var(--darkGreen)";
            document.getElementById("resetButton").style.color = "var(--darkGreen)";
            resetButtonClass();
            document.getElementById("btn-long").className = "button0";
            break;
    }
}

function resetButtonClass() {
    document.getElementById("btn-work").className = "button1";
    document.getElementById("btn-short").className = "button1";
    document.getElementById("btn-long").className = "button1";
}