
/* Adding a task */

//Variables
let todoInput = document.querySelector("#todoInput");
let taskList = document.querySelector("#taskList");
const btnAddTask = document.querySelector("#addTask");

//Add task event listener
btnAddTask.addEventListener("click", function() {

  //Check if Input value is null or not 
  if(todoInput.value === '') {

    alert("Please enter a value for the task.");
    
  } else {
    
    //Create Element for the Li and Button Tag
    let li = document.createElement("li");
    let button = document.createElement("button");

    //Insert the Input value to the li tags
    let inputValue = document.createTextNode(todoInput.value);
    let buttonText = document.createTextNode(' X');

    //Append LI and button tagstags    
    li.appendChild(inputValue);
    button.appendChild(buttonText);

    //Create LI tag with button
    taskList.appendChild(li).appendChild(button);

    //Marking a task as done
    li.addEventListener("click", function() {
      li.classList.toggle("done");
    });

    //Deleting a tasks
    button.addEventListener("click", function() {
      li.remove();
      button.remove();
    });

    //Initialize again to empty
    todoInput.value = '';

  }

});





