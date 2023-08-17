const select = document.getElementById("rating");

function displayNumber(number) {
    rating.textContent = number;
}

const no1 = document.getElementById("no1");
const no2 = document.getElementById("no2");
const no3 = document.getElementById("no3");
const no4 = document.getElementById("no4");
const no5 = document.getElementById("no5");

no1.addEventListener("click", () => {
    displayNumber(1);
});
no2.addEventListener("click", () => {
    displayNumber(2);
});
no3.addEventListener("click", () => {
    displayNumber(3);
});
no4.addEventListener("click", () => {
    displayNumber(4);
});
no5.addEventListener("click", () => {
    displayNumber(5);
});