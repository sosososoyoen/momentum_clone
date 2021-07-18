

const clock = document.querySelector("#clock")
const secondsSpan = document.getElementById("seconds")

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}`;
    secondsSpan.innerText=`${seconds}`;
}
getClock();
setInterval(getClock,1000);

