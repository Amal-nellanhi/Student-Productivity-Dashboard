function addTask() {
  let input = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (input.value.trim() === "") return;

  let li = document.createElement("li");
  
  let taskText = document.createElement("span");
  taskText.innerText = input.value;
  
  // --- New: Toggle Completed Class ---
  taskText.onclick = function() {
    taskText.classList.toggle("completed");
  };

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "🗑️";
  deleteBtn.className = "delete-btn";
  
  deleteBtn.onclick = function() {
    li.remove();
  };

  li.appendChild(taskText);
  li.appendChild(deleteBtn);
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

document.querySelector('#taskInput').addEventListener('keydown',(amal)=>{
  if(amal.key=='Enter'){
    addTask();
  }
});