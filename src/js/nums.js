
// Добаление порядкового номера
document.addEventListener("DOMContentLoaded", function () {
    let numberElements = document.querySelectorAll(".num");
    for (let i = 0; i < numberElements.length; i++) {
        numberElements[i].textContent = `${i+1}.`;
    }
});
