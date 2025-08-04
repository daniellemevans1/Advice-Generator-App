const buttonEl = document.querySelector("#icon-dice");
const adviceIdEl = document.querySelector("#advice-id");
const adviceEl = document.querySelector("#advice");
console.log(adviceEl);

buttonEl.addEventListener("click", getData);

async function getData() {

    const url = "https://api.adviceslip.com/advice";

    const response = await fetch(url);

    const json = await response.json();
    
    adviceIdEl.textContent = `${json.slip.id}`;
    adviceEl.textContent = `${json.slip.advice}`;

}