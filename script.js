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
function startTimer() {
  clearInterval(interval);

  interval = setInterval(() => {
    if (time <= 0) {
      clearInterval(interval);
      document.getElementById("timer").innerText = "00:00";

      // play alarm (if you added earlier)
      if (typeof alarmSound !== "undefined") {
        alarmSound.play();
      }

      return;
    }

    time--;

    let min = Math.floor(time / 60);
    let sec = time % 60;

    document.getElementById("timer").innerText =
      `${min}:${sec < 10 ? "0" : ""}${sec}`;

  }, 1000);
}
