// Add Task
let tasks=[];
function addTask() {
  let input = document.getElementById("taskInput");

  if (input.value === "" || tasks.includes(input.value)) return;
  
  let li = document.createElement("li");
  li.innerText = input.value;
  tasks.push(input.value);

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

document.querySelector('#taskInput').addEventListener('keydown',(amal)=>{
  if(amal.key=='Enter'){
    addTask();
  }
});