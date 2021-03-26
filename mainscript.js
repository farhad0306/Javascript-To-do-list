const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');
todoButton.addEventListener('click', addTodo);

function addTodo(event) {
    event.preventDefault();
    let inputValue = todoInput.value;
    let text = document.createTextNode(inputValue);
    let list = document.createElement("li");
    list.appendChild(text);
    if (inputValue == '') {
        alert("You need to enter a TASK!");
    }
    else {
        todoList.appendChild(list).classList.add("todo");
    }
    todoInput.value = "";
}

//Check mark button

const completedButton = document.createElement("button");
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

//Create LI
const newTodo = document.createElement("li");
newTodo.innerText = todoInput.value;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);

//Check trash Button 
const trashButton = document.createElement("button");
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trasButton);

//Delete the value from the input.
todoInput.value = "";

function deleteCheck(e) {
    const item = e.target;

    // DELETE TODO
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }

    //CHECK MARK 
    if(item.classList[0] === "complete-btn") {
        todo.classList.toggle("completed");
    }
}