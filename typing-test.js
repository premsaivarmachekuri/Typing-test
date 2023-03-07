let speedTypingTestEl = document.getElementById("speedTypingTest");
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let count = 0;
let time;
resultEl.textContent = "";
let spinnerEl = document.getElementById("spinner");

function timer() {
    count = 0;
    time = setInterval(function() {
        timerEl.textContent = count;
        count = count + 1;
    }, 1000)
}
timer();

function quote() {
    let url = "https://apis.ccbp.in/random-quote";
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let {
                content
            } = jsonData;
            spinnerEl.classList.add("d-none");
            quoteDisplayEl.classList.remove("d-none");
            console.log(content);
            quoteDisplayEl.textContent = content;
        });
}
quote();
submitBtnEl.addEventListener("click", function(event) {
    if (quoteDisplayEl.textContent === quoteInputEl.value) {
        clearInterval(time);
        count = count - 1;
        console.log(count);
        resultEl.textContent = "You typed in " + count + " seconds";
    } else {
        resultEl.textContent = "You typed incorrect answer";
    }
});
resetBtnEl.addEventListener("click", function(event) {
    spinnerEl.classList.remove("d-none");
    quoteDisplayEl.classList.add("d-none");
    clearInterval(time);
    clearInterval(time)
    quote();
    timer();

    quoteInputEl.value = "";
    resultEl.textContent = "";
});