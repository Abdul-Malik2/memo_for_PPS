// АНИМАЦИЯ ДЛЯ ФУТЕРА
// window.addEventListener("load", departurePageAnimation);

// const footerFixed = document.querySelector(".footer_fixed_LS");

// function departurePageAnimation() {
//     footerFixed.style.opacity = "0";
//     footerFixed.style.transform = "translateY(3rem)";

//     setTimeout(() => {
//         footerFixed.style.opacity = "1";
//         footerFixed.style.transform = "translateY(0)";
//     }, 1000);
// }

// departurePageAnimation();

// Добаление порядкового номера
document.addEventListener("DOMContentLoaded", function () {
    let numberElements = document.querySelectorAll(".number");
    numberElements[0].textContent = "№";
    for (let i = 1; i < numberElements.length; i++) {
        numberElements[i].textContent = `${i}.`;
    }
});
// Заполнение Ф У Т Е Р А
const countStatusElements = document.querySelectorAll(".count_status");
console.log(
    `Количество элементов в countStatus: ${countStatusElements.length}`
);

let inRanksСount = 0; // в строю
let errandСount = 0; // командировка
let diseaseСount = 0; // больничный
let holidayСount = 0; // отпуск

countStatusElements.forEach((element) => {
    const status = element.textContent.trim().toLowerCase();
    //console.log(status);
    if (status === "в строю") {
        inRanksСount++;
        element.style.color = "#af0f0f";
        element.style.textTransform = "uppercase";
    } else if (status === "командировка") {
        errandСount;
        element.style.color = "#031ab0";
    } else if (status === "больничный") {
        diseaseСount++;
        element.style.color = "#867306";
    } else if (status === "отпуск") {
        holidayСount++;
        element.style.color = "#065826";
    }
});

console.log(`в строю: ${inRanksСount}`);
const inRanksElement = document.querySelector(".span_in_ranks");
inRanksElement.textContent = inRanksСount;

console.log(`командировка: ${errandСount}`);
const errandElement = document.querySelector(".span_errand");
errandElement.textContent = errandСount;

console.log(`больничный: ${diseaseСount}`);
const diseaseElement = document.querySelector(".span_disease");
diseaseElement.textContent = diseaseСount;

console.log(`отпуск: ${holidayСount}`);
const holidayElement = document.querySelector(".span_holiday");
holidayElement.textContent = holidayСount;

const allPositionСount = 54; // по штату
console.log(`по штату: ${allPositionСount}`);
const allPositionElement = document.querySelector(".span_all_position");
allPositionElement.textContent = allPositionСount;

const allEmployeesСount = countStatusElements.length; // на лицо
console.log(`на лицо: ${allEmployeesСount}`);
const allEmployeesElement = document.querySelector(".span_all_employees");
allEmployeesElement.textContent = allEmployeesСount;

const candidateCount = 1;
console.log(`кандидаты: ${candidateCount}`);
const candidateElement = document.querySelector(".span_candidate");
candidateElement.textContent = candidateCount;

const vacantPositionСount = allPositionСount - allEmployeesСount; // вакант
console.log(`вакант: ${vacantPositionСount}`);
const vacantPositionСountElement = document.querySelector(
    ".span_vacant_position"
);
vacantPositionСountElement.textContent = vacantPositionСount;

// Прокручиваем страницу, чтобы элемент был в верхней части экрана
const topPage = document.querySelector(".title__4");
topPage.scrollIntoView({
    behavior: "smooth", //Значение "smooth" означает, что прокрутка будет плавной, а не резкой.
    block: "start", // Значение "start" означает, что верхняя часть элемента будет выровнена с началом видимой области
    inline: "nearest", //Значение "nearest" означает, что элемент будет выровнен так, чтобы его ближайшая сторона была как можно ближе к видимой области.
    offsetTop: 0, // Он задает дополнительное смещение сверху, чтобы элемент не оказался прямо в начале видимой области, а был отступлен на 10 пикселей сверху.
});

// Чтобы буфер был всегда равен размеру футера

// Добавляем обработчик события на изменение размера окна
window.addEventListener("resize", setBufferHeight);
// Добавляем обработчик события на загрузку контента документа
document.addEventListener("DOMContentLoaded", setBufferHeight);

// Функция для установки высоты элемента buffer_graf
function setBufferHeight() {
    // Находим элемент footer_table_graf
    const footer = document.querySelector(".footer_fixed_LS");
    // Находим элемент buffer_graf
    const buffer = document.querySelector(".buffer_list_LS");

    // Устанавливаем высоту элемента buffer_graf равной высоте footer_table_graf минус 10 пикселей
    buffer.style.height = `${footer.offsetHeight}px`;
}
// Функция для подсчета отмеченных чекбоксов
function updateCheckboxCount() {
    // Получаем все чекбоксы с классом 'item-checkbox'
    const checkboxes = document.querySelectorAll(".item-checkbox");
    // Считаем количество отмеченных чекбоксов
    const checkedCount = Array.from(checkboxes).filter(
        (checkbox) => checkbox.checked
    ).length;
    // Обновляем значение в <span class="span_group">
    document.querySelector(".span_group").textContent = checkedCount;
}

// Запускаем функцию каждую секунду
setInterval(updateCheckboxCount, 1000);

////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    document
        .querySelectorAll(".table_graf_string_1_LS")
        .forEach(function (row) {
            const statusElement = row.querySelector(".count_status");
            if (
                statusElement &&
                statusElement.textContent.trim() === "в строю"
            ) {
                const checkbox = row.querySelector(".item-checkbox");
                if (checkbox) {
                    checkbox.style.display = "block";
                }
            }
        });
});

// Выбор фамилий:
document.addEventListener("DOMContentLoaded", function () {
    const checkInButton = document.querySelector(".check-in");
    checkInButton.addEventListener("click", function () {
        let inputText = document.getElementById("footerInput").value;
        const surnamesToLog = [];
        let idxName = 1;
        document
            .querySelectorAll(".table_graf_string_1_LS")
            .forEach(function (row) {
                const checkbox = row.querySelector('input[type="checkbox"]');
                if (checkbox && checkbox.checked) {
                    const listElement = row.querySelector(".table_list_LS");
                    if (listElement) {
                        const fullName = listElement.textContent.trim();
                        const cleanFullName = fullName.split(/\s+/); //разделяет по пробелам, игнорирует лишние
                        const surname = cleanFullName[0].trim();
                        const name = cleanFullName[1].trim();
                        const logEntry = `${idxName}. ${surname} ${name}`;
                        surnamesToLog.push(logEntry);
                        idxName++; //
                    }
                }
            });

        if (surnamesToLog.length > 0) {
            let myMessage = inputText + ":\n" + surnamesToLog.join(";\n") + ".";
            console.log(myMessage);
            // Код для отправки сообщения в WhatsApp
            const groupInviteLink =
                "https://chat.whatsapp.com/DymPwaKXaASCYYa09kOvVD"; // Ссылка на группу
            const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
                myMessage
            )}&phone=${encodeURIComponent(groupInviteLink)}`;
            // Открываем ссылку в новой вкладке
            window.open(whatsappUrl, "_blank");
        } else {
            console.log("Нет отмеченных значений.");
        }
    });
});
