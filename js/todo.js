const todoList = document.querySelector("#todo-list");
const inputTodo = document.querySelector("#input-todo");
const buttonTodo = document.querySelector("#button-todo");
let todoArray = [];

const TODO_KEY = "todo";

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todoArray = todoArray.filter((todo) => todo.id != parseInt(li.id));
    saveTodo();
}
function saveTodo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(todoArray));
}
function paintTodo(todo) {
    const li = document.createElement("li");
    li.id = todo.id;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "button_delete";
    button.innerText = "Done";
    button.addEventListener("click", deleteTodo);

    const span = document.createElement("span");

    li.appendChild(button);
    li.appendChild(span);

    span.innerText = todo.text;

    todoList.appendChild(li);
}
function handleAddTodo(event) {
    event.preventDefault();

    const newTodo = inputTodo.value;
    inputTodo.value = "";

    const newTodoObj = {
        id: Date.now(),
        text: newTodo
    };

    todoArray.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}

buttonTodo.addEventListener("click", handleAddTodo);

const savedTodos = localStorage.getItem(TODO_KEY);

if(savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    todoArray = parsedTodos;
    parsedTodos.forEach(paintTodo);
}