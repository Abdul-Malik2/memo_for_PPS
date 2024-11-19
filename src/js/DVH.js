//DVH
function setBodyHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
}

// Установка высоты body при загрузке страницы
setBodyHeight();

// Обновление высоты body при изменении размера окна
window.addEventListener("resize", setBodyHeight);
