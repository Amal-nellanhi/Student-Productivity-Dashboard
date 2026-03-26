// Add Task
function addTask() {
  let input = document.getElementById("taskInput");

  if (input.value === "") return;

  let li = document.createElement("li");
  li.innerText = input.value;

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") return;

  let taskList = document.getElementById("taskList");
  let tasks = taskList.getElementsByTagName("li");

  // 🔥 Check for duplicate
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].innerText === taskText) {
      alert("Task already exists!");
      return;
    }
  }

  let li = document.createElement("li");
  li.innerText = taskText;

  // optional: keep mark complete feature
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  taskList.appendChild(li);

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
