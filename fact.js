let inputEl = document.getElementById("userInput");
let numberFact = document.getElementById("fact");
let spinnerEl = document.getElementById("spinner");

inputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        numberInfo();
    }
});

function numberInfo() {
    spinnerEl.classList.remove("d-none");
    numberFact.classList.add("d-none");
    let url = "https://apis.ccbp.in/numbers-fact?number=" + userInput.value;
    let options = {
        method: "GET",
    }
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let info = jsonData.fact;
            spinnerEl.classList.add("d-none");
            numberFact.classList.remove("d-none");

            numberFact.textContent = info;
        });
}