const loginWindow = document.getElementById("login_window");
const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
  event.preventDefault()
  // loginForm.classList.add(HIDDEN_CLASSNAME);
  loginWindow.style = "display: none;" // 이름 입력되면 디스플레이 숨김
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username)
}

function paintGreeting(username){
  greeting.innerText = `Have a Good Day, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginWindow.addEventListener("submit",onLoginSubmit);
} else {
  loginWindow.style.display = "none";
  //show the greetings 
  paintGreeting(savedUsername)
}