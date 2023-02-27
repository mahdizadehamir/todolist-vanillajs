const sumbitBtn = document.getElementById("submit");
sumbitBtn.addEventListener("click",addTask(e));
var txtInput ;
function addTask (e){
    txtInput = document.getElementById("text").value; 
    console.log(e.target.value)
}