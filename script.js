// Add Task
let tasks = [];

// Greeting
let now = new Date();
let hours = now.getHours();
document.querySelector('#amal').innerText =
  hours > 18 ? 'Good Evening!' :
  hours > 12 ? 'Good Afternoon!' :
  'Good Morning!';

// Sound
let chime = new Audio("chime.mp3");

function addTask() {
  let input = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");
  
  let taskValue = input.value.trim();

  // Prevent empty + duplicate
  if (taskValue === "" || tasks.includes(taskValue)) return;

  let li = document.createElement("li");
  
  let taskText = document.createElement("span");
  taskText.innerText = taskValue;
  
  taskText.onclick = function() {
    taskText.classList.toggle("completed");
  };

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "🗑️";
  deleteBtn.className = "delete-btn";
  
  deleteBtn.onclick = function() {
    li.remove();
    tasks = tasks.filter(t => t !== taskValue);
  };

  li.appendChild(taskText);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  tasks.push(taskValue);
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
  let btn = document.querySelector('#startpausebtn');

  if (btn.innerText === 'Start') {
    btn.innerText = 'Pause';
  } else {
    clearInterval(interval);
    btn.innerText = "Start";
    return;
  }

  interval = setInterval(() => {
    if (time <= 0) {
      chime.play();
      time = 1500;
      document.querySelector('#timer').innerText = '25:00';
      document.querySelector('#startpausebtn').innerText = 'Start';
      clearInterval(interval);
      return;
    }

    time--;

    let min = Math.floor(time / 60);
    let sec = time % 60;

    document.getElementById("timer").innerText =
      `${min}:${sec < 10 ? "0" : ""}${sec}`;
  }, 1000);
}

// Reset Timer
function resetTimer() {
  time = 1500;
  clearInterval(interval);
  document.querySelector('#startpausebtn').innerText = 'Start';
  document.querySelector('#timer').innerText = '25:00';
}

// Clear Tasks
function clearTasks() {
  document.querySelector('#taskList').innerHTML = "";
  tasks = [];
}

// Enter Key Event
document.querySelector('#taskInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});