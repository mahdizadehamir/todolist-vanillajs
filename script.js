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
    textInput.value = "";
  }
}
//showing Tasks
function displayTasks(inputValue) {
  if (tasks != null || []) {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "complete";
    const newEl = document.createElement("div");
    const btnHolder = document.createElement("div");
    const paragraph = document.createElement("p");
    newEl.setAttribute("id", "task-box");
    paragraph.textContent = inputValue;
    btnHolder.appendChild(deleteBtn);
    btnHolder.appendChild(completeBtn);
    newEl.appendChild(paragraph);
    newEl.appendChild(btnHolder);
    taskHolder.appendChild(newEl);
  }
}
//showing tasks at startUP
function initialShowingTasks() {
  for (const element of tasks) {
    displayTasks(element);
  }
}
initialShowingTasks();
