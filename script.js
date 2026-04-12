// Add Task
let tasks = [];

function addTask() {
  let input = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");
  
  // Grab the value and trim whitespace
  let taskValue = input.value.trim();

  // Combine both checks: prevent empty strings AND duplicates
  if (taskValue === "" || tasks.includes(taskValue)) return;

  let li = document.createElement("li");
  
  // From feat/enhance: Create span for the text
  let taskText = document.createElement("span");
  taskText.innerText = taskValue;
  
  // Toggle Completed Class
  taskText.onclick = function() {
    taskText.classList.toggle("completed");
  };

  // From feat/enhance: Create delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "🗑️";
  deleteBtn.className = "delete-btn";
  
  deleteBtn.onclick = function() {
    li.remove();
    // Fix: Remove the task from the array so it can be added again later
    tasks = tasks.filter(t => t !== taskValue);
  };

  // Append elements
  li.appendChild(taskText);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // From main: Add to the tracking array
  tasks.push(taskValue);
  
  // Clear input
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

// Clear Tasks
function clearTasks() {
  document.querySelector('#taskList').innerHTML = "";
  tasks = [];
}

// Enter Key Event Listener
document.querySelector('#taskInput').addEventListener('keydown', (amal) => {
  if (amal.key == 'Enter') {
    addTask();
  }
});