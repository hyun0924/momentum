const clock = document.querySelector("#clock");
clock.textContent = new Date().toLocaleTimeString();


function sayHello() {
    clock.textContent = new Date().toLocaleTimeString();
}

setInterval(sayHello, 1000)