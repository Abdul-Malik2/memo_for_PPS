window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".nav-menu"),
        menuItem = document.querySelectorAll(".nav-menu__button"),
        hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("hamburger_active");
        menu.classList.toggle("nav-menu_active");
    });

    menuItem.forEach((item) => {
        item.addEventListener("click", () => {
            hamburger.classList.toggle("hamburger_active");
            menu.classList.toggle("nav-menu_active");
        });
    });
});

//плавный скролл на айфон от 13
// выбираем все ссылки на странице
const links = document.querySelectorAll('a[href^="#"]');

// добавляем обработчик событий на каждую ссылку
links.forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault(); // отменяем стандартное поведение при клике

        const href = this.getAttribute("href"); // получаем значение атрибута href ссылки
        const target = document.querySelector(href); // выбираем элемент, на который ссылается ссылка

        // скроллим к элементу с плавностью за 500 миллисекунд
        const scrollDuration = 500; // длительность скролла в миллисекундах
        const targetTop =
            target.getBoundingClientRect().top + window.pageYOffset; // вычисляем позицию элемента относительно верхней границы окна
        const startPosition = window.pageYOffset; // получаем начальную позицию скролла
        const distance = targetTop - startPosition; // вычисляем расстояние, которое нужно проскроллить

        let startTime = null; // время начала скролла

        function scrollStep(currentTime) {
            if (startTime === null) {
                startTime = currentTime;
            }

            const elapsedTime = currentTime - startTime;
            const scrollPosition = easeInOutQuad(
                elapsedTime,
                startPosition,
                distance,
                scrollDuration
            );

            window.scrollTo(0, scrollPosition);

            if (elapsedTime < scrollDuration) {
                requestAnimationFrame(scrollStep);
            }
        }

        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(scrollStep);
    });
});

// const element = document.querySelector('.hamburger');

// function updatePosition() {
//     const marginLeft = parseInt(getComputedStyle(element).marginLeft, 10);
//     element.style.top = `${marginLeft + 5}px`;
// }

// // Обновляем позицию при загрузке страницы
// updatePosition();

// // Также можно обновлять позицию при изменении размера окна
// window.addEventListener('resize', updatePosition);
