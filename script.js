//defining items
const tasks = JSON.parse(localStorage.getItem("todoList")) || [];
const sumbitBtn = document.getElementById("submit");
sumbitBtn.addEventListener("click", addTask);
const taskHolder = document.querySelector(".task-holder");
//defining functions
function addTask(event) {
  event.preventDefault();
  const textInput = document.getElementById("text");
  if (textInput.value === "" || textInput.value === null) {
    alert("empty task not allowed");
  } else {
    tasks.push(textInput.value);
    displayTasks(textInput.value);
    localStorage.setItem("todoList", JSON.stringify(tasks));
    textInput.value = ""
  }
}
//showing Tasks
function displayTasks(inputValue) {
  if (tasks != null || []) {
    const newEl = document.createElement("p");
    newEl.setAttribute("id","task-box")
    newEl.textContent = inputValue;
    taskHolder.appendChild(newEl);
  }
}
function initialShowingTasks(){
  for (const element of tasks){
    displayTasks(element)
  }
}
initialShowingTasks()