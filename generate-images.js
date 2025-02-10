const fs = require("fs");

// Путь к папке с изображениями
const imageFolder = "images/";

// Получаем список файлов в папке
fs.readdir(imageFolder, (err, files) => {
    if (err) {
        console.error("Ошибка чтения папки:", err);
        return;
    }

    // Фильтруем только изображения
    const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

    // Генерируем JavaScript-код
    const jsCode = `
        const images = ${JSON.stringify(images)};
        function loadImages() {
            const imageFolder = "images/";
            const gallery = document.getElementById("gallery");
            gallery.innerHTML = ""; // Очищаем галерею

            images.forEach(image => {
                const img = document.createElement("img");
                img.src = imageFolder + image;
                img.alt = image;
                img.classList.add("gallery-image"); // Добавляем класс для стилей

                // Добавляем обработчик клика для открытия модального окна
                img.addEventListener("click", () => openModal(imageFolder + image));

                gallery.appendChild(img);
            });
        }

        // Функция для открытия модального окна
        function openModal(imageSrc) {
            const modal = document.getElementById("modal");
            const modalImage = document.getElementById("modal-image");

            modal.style.display = "block"; // Показываем модальное окно
            modalImage.src = imageSrc; // Устанавливаем источник изображения

            // Закрытие модального окна при нажатии на крестик
            const closeBtn = document.querySelector(".close");
            closeBtn.onclick = () => closeModal();

            // Закрытие модального окна при клике вне изображения
            modal.onclick = (event) => {
                if (event.target === modal) {
                    closeModal();
                }
            };
        }

        // Функция для закрытия модального окна
        function closeModal() {
            const modal = document.getElementById("modal");
            modal.style.display = "none"; // Скрываем модальное окно
        }

        window.onload = loadImages;
    `;

    // Сохраняем JavaScript-код в файл script.js
    fs.writeFile("script.js", jsCode, err => {
        if (err) {
            console.error("Ошибка записи файла:", err);
        } else {
            console.log("Файл script.js успешно создан!");
        }
    });
});