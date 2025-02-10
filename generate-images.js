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
                gallery.appendChild(img);
            });
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