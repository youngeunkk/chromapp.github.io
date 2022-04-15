const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // === document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = []; // 배열의 값들이 덮어쓰이는 것을 방지하기 위해 let 사용

const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));  // 값을 문자열로 저장할 수 있게 JSON.stringify로 감싸기
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //Input에 입력을 완료하고 새로운 변수에 저장
    toDoInput.value = ""; // 입력을 완료한 후 화면에 입력값을 지우기 위함
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}