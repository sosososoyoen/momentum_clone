const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting__username")
const hello = document.querySelector("#greeting__hello")

const HIDDEN_CLASSNAME = "hidden";
//display : none 클래스

const USERNAME_KEY = "username"

const time = function() {
    const today =new Date();
    const hour = today.getHours();
    if(hour > 5 && hour <12) {
        hello.innerText = "Good morning!, ";
    } else if(hour >= 12 && hour <= 17) {
        hello.innerText = "Good afternoon!, ";
    } else{
        hello.innerText = "Good evening!, ";
    }
}
function paintGreetings(username) {
    time();
    hello.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText =` ${username}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
function onLoginSubmit(event) {
    //기본 이벤트(submit 받고 바로 새로고침) 제거
    event.preventDefault();
    // 입력값 받기
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    //유저네임 저장
    loginForm.classList.add(HIDDEN_CLASSNAME)
    //input 숨기기
    console.log(username)
    paintGreetings(username);
    //인삿말 

}



const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
    //유저네임이 없으면
    // 폼(입력창) 보여줌
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    // 그리팅 보여줌
    paintGreetings(savedUsername);
}