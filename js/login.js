const nicknameBox = document.body.querySelector("#nickname");
const loginBox = document.body.querySelector("#login-area");
const inputName = document.body.querySelector("#input-nickname");
const buttonLogin = document.body.querySelector("#button-login");
const notice = document.body.querySelector("#notice-login");
const todoArea = document.body.querySelector("#todo-area");

const HIDDEN_CLASS = "hidden";
const NICKNAME_KEY = "nickname";

const getNickname = localStorage.getItem(NICKNAME_KEY);

function checkLogin() {
    return Boolean(getNickname);
}
function showHello(nickname) {
    nicknameBox.innerHTML = nickname;
    loginBox.classList.add(HIDDEN_CLASS);
    todoArea.classList.remove(HIDDEN_CLASS);
}
function handleLogin(event) {
    event.preventDefault();

    const nickname = inputName.value;

    if(nickname === '') {
        notice.classList.remove(HIDDEN_CLASS);
    } else {
        localStorage.setItem(NICKNAME_KEY, nickname);
        showHello(nickname);
    }
}

if(checkLogin()) showHello(getNickname);
else buttonLogin.addEventListener("click", handleLogin);
