const taskes = [];
const sumbitBtn = document.getElementById("submit");
sumbitBtn.addEventListener("click", addTask);

function addTask(event) {
  event.preventDefault();
  const textInput = document.getElementById("text");
  if (textInput.value === "" || textInput.value === null) {
    alert("empty task not allowed");
  } else {
    taskes.push(textInput.value);
    localStorage.setItem("tasks", JSON.stringify(taskes));
  }
}

function creatingTask() {
  const taskHolder = document.querySelector(".task-holder");
  const newTask = document.createElement("p");
  const createdTasks = JSON.parse(localStorage.getItem("tasks"));
  
}
