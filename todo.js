const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector(".todo-list");
const toDoInput = document.querySelector(".todo-form-input");

let toDos = [];

function saveTodo() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function makeTodoList(newTodo) {
    const makeList = document.createElement("li");
    makeList.id = newTodo.id;
    const makeSpan = document.createElement("span");
    makeSpan.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    toDoList.appendChild(makeList);
    toDoList.appendChild(makeSpan);
    toDoList.appendChild(button);
}

function deleteToDo(event) {
    const ParentList = event.target.parentElement;
    ParentList.remove();
    toDos = toDos.filter(function (toDos) {
        return toDos.id !== parseInt(makeList.id);
    });
    saveTodo();
}

function SubmitTodo(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    makeTodoList(newTodoObj);
    toDos.push(newTodo);
    saveTodo();
}

toDoForm.addEventListener("submit", SubmitTodo);

const savedToDos = localStorage.getItem("todos");
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(makeTodoList);
}