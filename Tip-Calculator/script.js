const billInputEl = document.getElementById("bill");
const tipInputEl = document.getElementById("tip");
const resultEl = document.getElementById("result");
const totalEl = document.getElementById("total");

function calculateTotal() {
    const billValue = billInputEl.value; 
    const tipValue = tipInputEl.value;
    const totalValue = billValue * (1 + tipValue / 100);
    totalEl.innerText = "R " + totalValue.toFixed(2);
}



resultEl.addEventListener("click", calculateTotal);