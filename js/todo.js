const todoForm = document.getElementById("todo-form");
const toDoInput = todoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos(){ //localStorage로 todolist 저장
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //object나 array등을 String으로 변환해서 스토리지에 저장
}

function deleteTodo(event){
  const li = event.target.parentElement; //삭제할 todo의 li를 가져옴
  //event.target은 html의 element, 거기엔 부모element를 가져올수있는 parentElement라는 property가 있음
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click",deleteTodo);
  li.appendChild(span); //span을 li 맨밑에 삽입
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(e){
  e.preventDefault();
  const newTodo = toDoInput.value;
  const newTodoObj = {
    text:newTodo,
    id: Date.now(),
  }
  if(toDos.length>10){
    alert("최대 10개까지 생성가능합니다.");
  } else{
    toDoInput.value = ""; //이미 toDoInput의 value를 newTodo라는 변수에 저장해놔서 value를 ""로 초기화해도 newTodo에 영향을 끼치지않음
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
  }
}

todoForm.addEventListener("submit",handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos); //string을 다시 js에서 사용가능한 array로 변환
  toDos = parsedToDos; //이전의 storage를 비우지않고 그대로 가져온 상태에서 덮어씀
  parsedToDos.forEach(paintToDo)
}

