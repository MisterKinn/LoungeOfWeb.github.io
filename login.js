const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector(".login-input");
const login = document.querySelector("#login");

function saveUsername(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem("username", username);
    displayUsername(username);
}

function displayUsername(username) {
    login.innerText = `Welcome, ${username}!`;
    login.classList.remove("hidden");
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", saveUsername);
} else {
    displayUsername(savedUsername);
}