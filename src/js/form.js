// переменная пароля
const currentDate = new Date();
const day = currentDate.getDate().toString().padStart(2, "0"); // день в двузначном формате
const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // месяц в двузначном формате
const year = currentDate.getFullYear().toString(); // год
const simbol = "G";
const dateNumber = simbol + day + month;
console.log(dateNumber);

// ВВОД ПАРОЛЯ
const link = document.getElementById("myLink");
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submitPassword");

// Обработчик клика по ссылке, если запаролить только кнопку "лекции"
/* link.onclick = function () {
    passwordForm.style.display = "block";
}; */

// Обработчик клика по кнопке отправки пароля
submitButton.addEventListener("click", () => {
    const password = passwordInput.value;
    // Проверяем пароль//toLocaleUpperCase() более надёжный способ чем  toUpperCase() чтобы буква введённая пользователем всегда была заглавной
    if (password.toLocaleUpperCase() === dateNumber) {
        // Если пароль верный, переходим на другую страницу
        // window.location.href = "lectures.html"; //если запаролить только кнопку "лекции"
        // Если пароль верный то показывает nav, и скрываем форму// если запаролить весь nav
        passwordForm.style.display = "none";
        nav.classList.remove("non-menu");
    } else {
        // Если пароль неверный, выводим сообщение об ошибке
        alert("Неверный пароль!");
    }
});

//нажатие на enter
passwordForm.setAttribute("novalidate", ""); // Добавляем атрибут "novalidate" к форме

passwordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Отменяем отправку формы по умолчанию
    const password = passwordInput.value;
    if (password.toLocaleUpperCase() === dateNumber) {
      passwordForm.style.display = "none";
      nav.classList.remove("non-menu");
    } else {
      alert("Неверный пароль!");
    }
  }
});



//DVH
function setBodyHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

// Установка высоты body при загрузке страницы
setBodyHeight();

// Обновление высоты body при изменении размера окна
window.addEventListener("resize", setBodyHeight);



