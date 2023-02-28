const sumbitBtn = document.getElementById("submit");
sumbitBtn.addEventListener("click", addTask);
function addTask(event) {
  event.preventDefault();
  //adding div
  const textInput = document.getElementById("text");
  const taskHolder = document.querySelector(".task-holder");
  //creating an element
  const newTask = document.createElement("p");
  newTask.innerText = textInput.value;
  console.log(newTask)
  //apending to task holder
  taskHolder.appendChild(newTask);
}
