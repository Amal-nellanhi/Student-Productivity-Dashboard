// Add Task
let tasks=[];
let now = new Date();
let hours = now.getHours();
hours=19;
document.querySelector('#amal').innerText= hours>18? 'Good Evening!': hours>12?'Good Afternoon!' : 'Good Morning!';
let chime = new Audio("chime.mp3");
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
  btn=document.querySelector('#startpausebtn');
  if(btn.innerText=='Start'){
    btn.innerText='Pause';
  }
  else{
    clearInterval(interval);
    btn.innerText="Start";
    return;
  }

  interval = setInterval(() => {
    if(time<=0){
      chime.play();
      time= 1500;
      document.querySelector('#timer').innerText='25:00';
      document.querySelector('#startpausebtn').innerText='Start';
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
function resetTimer(){
  time=1500;
  clearInterval(interval);
  document.querySelector('#startpausebtn').innerText='Start';
  document.querySelector('#timer').innerText='25:00';
}
function clearTasks(){
  document.querySelector('#taskList').innerHTML="";
  tasks=[];
}
document.querySelector('#taskInput').addEventListener('keydown',(amal)=>{
  if(amal.key=='Enter'){
    addTask();
  }
});