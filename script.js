//defining items
const tasks = JSON.parse(localStorage.getItem("todoList")) || [];
const completedTask = JSON.parse(localStorage.getItem("completedTask")) || [];
const sumbitBtn = document.getElementById("submit");
sumbitBtn.addEventListener("click", addTask);
const taskHolder = document.querySelector(".task-holder");
const textInput = document.getElementById("text");
const selectButton = document.getElementById("select");
selectButton.addEventListener("click",changingValue);




//defining functions
function changingValue(event){
  if(event.target.value === "completed"){
      for (element of completedTask){
        taskHolder.innerHTML = "";
        displayTasks(element)
      }
  }else if(event.target.value === "uncompleted"){
    const filteredValues = tasks.filter(function(value){
      if(completedTask.includes(value) === false){
        return value
      }
    })
    for (element of filteredValues){
      taskHolder.innerHTML = "";
      displayTasks(element)
    }
  }
  else {
    taskHolder.innerHTML = "";
    initialShowingTasks();
    }
}




function addTask(event) {
  event.preventDefault();
  if (textInput.value === "" || textInput.value === null) {
    alert("empty task not allowed");
  } else {
    tasks.push(textInput.value);
    displayTasks(textInput.value);
    localStorage.setItem("todoList", JSON.stringify(tasks));
    textInput.value = "";
  }
}
//deleteButton Function
function deletefunc(event) {
  console.log(event.target.parentElement.previousSibling.innerText);
  tasks.splice(
    tasks.indexOf(event.target.parentElement.previousSibling.innerText),
    1
  );
  completedTask.splice(
    completedTask.indexOf(event.target.parentElement.previousSibling.innerText),
    1
  );
  localStorage.setItem("todoList", JSON.stringify(tasks));
  localStorage.setItem("completedTask",JSON.stringify(completedTask));
  taskHolder.innerHTML = "";
  initialShowingTasks();
}
//completebutton function
function completefunc(event) {
  event.target.disabled = true;
  event.target.parentElement.previousSibling.innerHTML = `<del>${event.target.parentElement.previousSibling.innerText}</del>`;
  completedTask.push(event.target.parentElement.previousSibling.innerText);
  localStorage.setItem("completedTask", JSON.stringify(completedTask));
}
//showing Tasks
function displayTasks(inputValue) {
  if (tasks != null || []) {
    console.log(completedTask);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "complete";
    const newEl = document.createElement("div");
    const btnHolder = document.createElement("div");
    const paragraph = document.createElement("p");
    newEl.setAttribute("id", "task-box");
    if (completedTask.includes(inputValue)) {
      paragraph.innerHTML = `<del>${inputValue}</del>`;
    } else {
      paragraph.textContent = inputValue;
    }
    deleteBtn.addEventListener("click", deletefunc);
    completeBtn.addEventListener("click", completefunc);
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
