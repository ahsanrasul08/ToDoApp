"use strict";

const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const todolistBTN = document.querySelector(".todolist_button");
const todolist = document.querySelector("#todo-list");
const changeQueue = document.querySelector("#change-queue");
const toggles = document.querySelectorAll(".todo-list-queues > button")



let todos = [];
let selectedTodos = [];

if (localStorage["data"] != null && localStorage["data"] != undefined) {
    todos = JSON.parse(localStorage["data"]);
}

function addToLocalStorage() {
    localStorage["data"] = JSON.stringify(todos);
}



function addToDo(event) {
    event.preventDefault()
    todos.push({
        title: input.value,
        complete: false,
        id: self.crypto.randomUUID(),
        queue: "1"
    })

    addToLocalStorage();
    displayToDo();
}


form.addEventListener("submit", addToDo)


//to display the todo lists;
function displayToDo(queue = "1") {

    let viewTodos = todos.filter((todo) => todo.queue === queue);
    let html = ``;
    viewTodos.forEach((todo) => {
        html += `<li id="${todo.id}" data-queue="${todo.queue}">       
        <span class="text">
         <input class="todolist-check" type="checkbox">
        ${todo.title}
        </span>
        <div id="todolist-btns">
        <button id="delete-btn" class="todo-app-btn">Delete</button>
        <button id="edit-btn"  class="todo-app-btn edit-btn">Edit</button>
        </div>
        </li>`;
    })
    todolist.innerHTML = html;

    document.querySelectorAll(".edit-btn").forEach(button => {
        button.addEventListener("click", editToDo);
    });


    displayChangeQueue();
}


//to update the value of change-queue drop down dynamically
function displayChangeQueue(){
    if(selectedTodos.length>0){
        changeQueue.style.display = "block";
        let selectedQueue=selectedTodos[0].getAttribute('data-queue');
        changeQueue.value=selectedQueue;
  }
  else{
        changeQueue.style.display = "none"
  }
}

function editToDo(event) {
    const listItem = event.target.closest("li");
    const todoId = listItem.id;
    const todo = todos.find(todo => todo.id === todoId);
    

    //input field for editing
let editInput=document.createElement("input");
editInput.type="text";
editInput.value=todo.title;
editInput.classList.add("edit-input");

    // Replace the todo title with the input field
    const textSpan = listItem.querySelector(".text");
    textSpan.innerHTML="";
    textSpan.appendChild(editInput);

//save button
const saveBtn=listItem.querySelector(".edit-btn");
saveBtn.textContent="Save";


    saveBtn.addEventListener("click",()=>{
        todo.title=editInput.value
        console.log(todo.title);
        addToLocalStorage();
        displayToDo(todo.queue);
    })

}

//for adding the selected todolists in temporary storage (selectedTodosp[]);
document.documentElement.addEventListener("change", (event) => {
    if (event.target.classList.contains("todolist-check")) {
        let listItem = event.target.closest("li");
        if (event.target.checked) {
            event.target.classList.add("checked");
            selectedTodos.push(listItem);
            displayChangeQueue();
        }
        else {
            event.target.classList.remove("checked");
            selectedTodos = selectedTodos.filter((todo) => todo.id != listItem.id)
            displayChangeQueue();
        }

    }
})


//event listner to delete the todo list
document.documentElement.addEventListener("click",(event)=>{
    if(event.target.id==="delete-btn"){
        let listItem = event.target.closest("li");
        todos=todos.filter((todo)=>todo.id!=listItem.id);
        addToLocalStorage();
        displayToDo()
    }
})


//event to change the queue of selected todo
changeQueue.addEventListener("click", (event) => {
    selectedTodos.forEach((selectedTodo) => {
  
        todos.forEach((todo) => {

            if (selectedTodo.id === todo.id) {
                todo.queue = event.target.value;
                localStorage["data"] = JSON.stringify(todos);
            }

        })
    })
    //to change the focus and display after the queue change
    toggles.forEach((toggle)=>{
        if(toggle.value===event.target.value){
            selectedTodos=[];
            displayToDo(event.target.value);
            toggle.focus();
            

        }
    })
})



//to rander the todo list after selecting a given queue button (active, complete, pending)
toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        toggles.forEach((toggle) => {
            toggle.setAttribute("aria-pressed", "false");
        })
        toggle.setAttribute("aria-pressed", "true");
        displayToDo(toggle.value);
        toggle.focus();
    })
})




displayToDo()