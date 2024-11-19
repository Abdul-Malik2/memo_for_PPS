// Получаем текущую дату
// получаю время +8 часо по тихоокеанском часовому поясу PST
// чтобы день наряда менялся не в 00 часов а в 08 часов
const currentDatePST = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
});
const currentDate = String(new Date(currentDatePST).getDate());

// const currentDate = new Date().getDate().toString().padStart(2, '0');

console.log("currentDate:", currentDate, typeof currentDate);
// Находим все элементы с классом "span_data"
const spanDataElements = document.querySelectorAll(".span_data");
console.log("spanDataElements:", spanDataElements);

// Перебираем все элементы "span_data"
spanDataElements.forEach((spanDataElement) => {
    // Проверяем, равен ли текст элемента текущей дате
    console.log(
        "spanDataElement.textContent:",
        typeof spanDataElement.textContent
    );
    if (spanDataElement.textContent === currentDate) {
        console.log("совпадение");

        // Этот код ищет ближайший родительский элемент
        // с классом "table_graf_string_1" относительно элемента spanDataElement.
        // Метод closest() возвращает ближайший родительский элемент,
        // который соответствует указанному CSS-селектору.
        const parentElement = spanDataElement.closest(".table_graf_string_1");

        // Присваиваем красный фон всем элементам в строке:
        // Этот код находит все дочерние элементы parentElement, которые имеют класс "table_item".
        // Метод querySelectorAll() возвращает коллекцию всех элементов, которые соответствуют классу "table_item".
        parentElement.querySelectorAll(".table_item").forEach((item) => {
            item.style.backgroundColor = "#e961619b";
        });

        // Прокручиваем страницу, чтобы текущая дата была в центре экрана (при загрузке страницы)
        spanDataElement.scrollIntoView({
            behavior: "smooth", //Значение "smooth" означает, что прокрутка будет плавной, а не резкой.
            block: "center", // Значение "start" означает, что верхняя часть элемента будет выровнена с началом видимой области
            inline: "center", //Значение "nearest" означает, что элемент будет выровнен так, чтобы его ближайшая сторона была как можно ближе к видимой области.
            //offsetTop: 10, // Он задает дополнительное смещение сверху, чтобы элемент не оказался прямо в начале видимой области, а был отступлен на 10 пикселей сверху.
        });
        

    }
});


// Прокручиваем страницу, чтобы текущая дата была в центре экрана (после преведения тел в горизонтальное положени)
// Добавляем обработчик события изменения размера окна
window.addEventListener("resize", () => {
    const mediaQuery = window.matchMedia("(min-width: 567px)");
    if (mediaQuery.matches) {
        spanDataElements.forEach((spanDataElement) => {
            if (spanDataElement.textContent === currentDate) {
                spanDataElement.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                    //offsetTop: 10,
                });
            }
        });
    }
});




//Делаем сб и вс красными:
const tableGrafDataElements = document.querySelectorAll(".table_graf_data");

tableGrafDataElements.forEach((element) => {
    console.log(element);
    const spanDayElement = element.querySelector(".span_day");
    if (
        spanDayElement.textContent.toLowerCase() === "сб" ||
        spanDayElement.textContent.toLowerCase() === "вс"
    ) {
        spanDayElement.parentElement.style.color = "#af0f0f";
    }
});


//Чтобы buffer_graf всегда был равен footer_table_graf

window.addEventListener("resize", setBufferHeight);
document.addEventListener("DOMContentLoaded", setBufferHeight);

function setBufferHeight() {
    const footer = document.querySelector(".footer_table_graf");
    const buffer = document.querySelector(".buffer_graf");
    buffer.style.height = `${footer.offsetHeight - 10}px`;
}
