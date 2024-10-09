const buttonsEl = document.querySelectorAll("button") /* `document.querySelectorAll selects all html button tags*/
const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", ()=> {   //'addEventListener' captures any event happening in the webpage
        const buttonValue = buttonsEl[i].textContent; //'variable.textContent' returns the string or number inside the html tag
        if(buttonValue === "C"){
            clearResult();
        }
        else if (buttonValue === "=") {
            calculateResult();
        } 
        else {
            appendValue(buttonValue);
        }
    })
}

function clearResult(){

}

function calculateResult() {
    inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonValue) {
    inputFieldEl.value += buttonValue; //inputFieldEl = inputFieldEl + buttonValue

}