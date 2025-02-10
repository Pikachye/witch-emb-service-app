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

    // Генерируем временную метку
    const timestamp = Date.now();

    // Генерируем JavaScript-код
    const jsCode = `
        const images = ${JSON.stringify(images)};
        function loadImages() {
            const imageFolder = "images/";
            const gallery = document.getElementById("gallery");
            gallery.innerHTML = ""; // Очищаем галерею
            images.forEach(image => {
                const img = document.createElement("img");
                img.src = imageFolder + image + "?v=${timestamp}";
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

    // Обновляем index.html с временной меткой
    const htmlContent = `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Галерея работ</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Галерея работ студии машинной вышивки</h1>
    </header>
    <main>
        <div id="gallery" class="gallery">
            <!-- Изображения будут загружаться сюда -->
        </div>
    </main>
    <footer>
        <p>&copy; 2023 Студия машинной вышивки</p>
    </footer>
    <script src="script.js?v=${timestamp}"></script>
</body>
</html>
`;

    // Сохраняем HTML-код в файл index.html
    fs.writeFile("index.html", htmlContent, err => {
        if (err) {
            console.error("Ошибка записи файла index.html:", err);
        } else {
            console.log("Файл index.html успешно обновлен!");
        }
    });
});