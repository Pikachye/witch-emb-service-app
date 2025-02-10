const fs = require("fs");

// Путь к папке с изображениями
const imageFolder = "images/";

// Получаем список файлов в папке
fs.readdir(imageFolder, (err, files) => {
    if (err) {
        console.error("Ошибка чтения папки:", err);
        return;
    }

    // Фильтруем только изображения (поддерживаемые форматы: jpg, jpeg, png, gif)
    const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

    // Генерируем JavaScript-код
    const jsCode = `
        // Автоматически сгенерированный массив изображений
        const images = ${JSON.stringify(images)};

        // Функция для загрузки изображений
        function loadImages() {
            const imageFolder = "images/";
            const gallery = document.getElementById("gallery");

            images.forEach(image => {
                const img = document.createElement("img");
                img.src = imageFolder + image; // Указываем путь к изображению
                img.alt = image; // Альтернативный текст
                gallery.appendChild(img); // Добавляем изображение в галерею
            });
        }

        // Загружаем изображения при загрузке страницы
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