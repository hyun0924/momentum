const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

if ((username = localStorage.getItem(USERNAME_KEY)) != null) {
    completeGreeting(username);
}

function onLoginSubmit(event) {
    event.preventDefault();

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    console.log(username);
    
    completeGreeting(username);
};

function completeGreeting(username) {
    loginForm.classList.add(HIDDEN_CLASSNAME);

    greeting.textContent = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);