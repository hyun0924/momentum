const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let todos = [];

function deleteToDo(event) {
    parentList = event.target.parentNode;
    todoList.removeChild(parentList);

    todos = todos.filter(item => item.id !== parseInt(parentList.id));
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function saveToDo(newTodo) {
    todos.push(newTodo);
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    span.textContent = newTodo.todo;
    li.id = newTodo.id;
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", deleteToDo);
}

function handleFormSubmit(event) {
    event.preventDefault();
    // clear input
    const newTodo = {"id": Date.now(), "todo": todoInput.value};
    todoInput.value = "";

    paintToDo(newTodo);
    saveToDo(newTodo);
}

// if element exist, paint it
if (localStorage.getItem(TODOS_KEY) !== null) {
    todos = JSON.parse(localStorage.getItem(TODOS_KEY));
    todos.forEach(paintToDo);
}
todoForm.addEventListener("submit", handleFormSubmit);