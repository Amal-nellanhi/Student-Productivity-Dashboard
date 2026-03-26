// Add Task
function addTask() {
  let input = document.getElementById("taskInput");

  if (input.value === "") return;

  let li = document.createElement("li");
  li.innerText = input.value;

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
function resetTimer() {
  clearInterval(interval);   // stop timer
  time = 1500;               // reset time (25 min)
  isRunning = false;

  // update display
  document.getElementById("timer").innerText = "25:00";

  // reset button text
  document.getElementById("startBtn").innerText = "Start";
}
// Dark Mode
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Timer
let time = 1500;
let interval;

function startTimer() {
  clearInterval(interval);

  interval = setInterval(() => {
    time--;

    let min = Math.floor(time / 60);
    let sec = time % 60;

    document.getElementById("timer").innerText =
      `${min}:${sec < 10 ? "0" : ""}${sec}`;

  }, 1000);
}
