let countdownEl = document.getElementById("countdown");
let startTime = 25;
let time = startTime * 60;
let timer;
let workCounter = 0;
let isTimerRunning = false;

let clickSound = new Audio("sounds/click.wav");
let endTimeSound = new Audio("sounds/endtime.wav");

function changeTimeValue(remainingTime) {
  let beforeStop = performance.now();
  if (
    !isTimerRunning ||
    confirm("The timer is still running, are you sure you want to switch?")
  ) {
    stopTimer();
    document.getElementById("countdown").innerHTML = `${remainingTime}:00`;
    startTime = remainingTime;
    time = remainingTime * 60;
  } else {
    time = time - Math.floor((performance.now() - beforeStop) / 1000)
  }
}

function updateCountdown() {
  if (time > 0) {
    time--;
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
  } else {
    endTimeSound.play();
    resetTimer();
    countWorkIterations();
  }
}

function countWorkIterations() {
  if (startTime == 25) workCounter++;
  else if (startTime == 15) workCounter = 0;

  if (workCounter < 4) {
    switch (startTime) {
      case 25:
        changeTimeValue(5);
        changeBackgroundColor(5);
        break;
      case 5:
      case 15:
        changeTimeValue(25);
        changeBackgroundColor(25);
        break;
    }
  } else {
    workCounter = 0;
    changeTimeValue(15);
    changeBackgroundColor(15);
  }
}

function startTimer() {
  timer = setInterval(updateCountdown, 1000);
  document.getElementById("startButton").onclick = stopTimer;
  document.getElementById("startButton").innerHTML = "Stop";
  isTimerRunning = true;
}

function stopTimer() {
  clearInterval(timer);
  document.getElementById("startButton").onclick = startTimer;
  document.getElementById("startButton").innerHTML = "Start";
  isTimerRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  stopTimer();
  changeTimeValue(startTime);
}

function changeBackgroundColor(mode) {
  switch (mode) {
    case 25:
      document.body.style.backgroundImage =
        "linear-gradient(to right top, var(--red), var(--darkRed))";
      document.getElementById("startButton").style.color = "var(--darkRed)";
      document.getElementById("resetButton").style.color = "var(--darkRed)";
      resetButtonClass();
      document.getElementById("btn-work").className = "button0";
      break;
    case 5:
      document.body.style.backgroundImage =
        "linear-gradient(to right top, var(--blue), var(--darkBlue))";
      document.getElementById("startButton").style.color = "var(--darkBlue)";
      document.getElementById("resetButton").style.color = "var(--darkBlue)";
      resetButtonClass();
      document.getElementById("btn-short").className = "button0";

      break;
    case 15:
      document.body.style.backgroundImage =
        "linear-gradient(to right top, var(--green), var(--darkGreen))";
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

function playClickSound() {
  clickSound.play();
}