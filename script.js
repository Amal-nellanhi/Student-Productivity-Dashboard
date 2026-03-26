// Add Task
function addTask() {
  let input = document.getElementById("taskInput");

  if (input.value === "") return;

  let li = document.createElement("li");
  li.innerText = input.value;

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}

// Dark Mode
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Timer
let time = 1500;
let interval;
let isRunning = false; // track state

const alarmSound = new Audio("https://www.soundjay.com/buttons/sounds/beep-07.mp3");

function startTimer() {
  const btn = document.getElementById("startBtn");

  // If already running → PAUSE
  if (isRunning) {
    clearInterval(interval);
    isRunning = false;
    btn.innerText = "Start";
    return;
  }

  // If paused → RESUME
  isRunning = true;
  btn.innerText = "Pause";

  interval = setInterval(() => {
    time--;

    let min = Math.floor(time / 60);
    let sec = time % 60;

    document.getElementById("timer").innerText =
      `${min}:${sec < 10 ? "0" : ""}${sec}`;

    // Timer finished
    if (time <= 0) {
      clearInterval(interval);
      isRunning = false;
      btn.innerText = "Start";

      alarmSound.play();
      alert("⏰ Time's up!");
    }

  }, 1000);
}
