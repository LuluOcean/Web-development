/* document.getElementById(html element) = get the variable of an html using the id reference*/
const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");
let historyList = [];

/* chooses random number 1-6, pass the value to the getDiceFace fucntion to get the correct dice symbol*/
function rollDice(){
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    diceEl.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();
};

function updateRollHistory() {
    rollHistoryEl.innerHTML = ""; /* [variable_name].innerHTML === lets you printout to the index.html file*/
    for (let i = 0; i < historyList.length; i++){
        const listItem = document.createElement("li") /* document.createElement([html tag]) === to create a new html tag*/
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`;
        rollHistoryEl.appendChild(listItem);
    };
}

function getDiceFace(rollResult) {
    switch(rollResult){
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9860;";
        default:
            return "";
    }
}

buttonEl.addEventListener("click", ()=>{
    diceEl.classList.add("roll-animation");
    setTimeout(() => {
        diceEl.classList.remove("roll-animation");
        rollDice()
    }, 1000);
})

