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
                img.alt = image;
                img.classList.add("clickable-image");
                img.style.width = "150px"; // Ограничение размера
                img.style.height = "auto";

                // Асинхронная загрузка
                img.dataset.src = imageFolder + image + "?v=${timestamp}"; // Сохраняем путь
                img.onload = () => img.src = img.dataset.src; // Загружаем изображение
                img.src = ""; // Начинаем с пустого src

                gallery.appendChild(img);

                // Ленивая загрузка
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            img.src = img.dataset.src; // Загружаем, когда изображение видно
                            observer.unobserve(img);
                        }
                    });
                });
                observer.observe(img);
            });

            // Логика модального окна
            const modal = document.getElementById("modal");
            const modalImg = document.getElementById("modal-image");
            const closeBtn = document.querySelector(".close");

            document.querySelectorAll(".clickable-image").forEach(img => {
                img.addEventListener("click", () => {
                    modal.style.display = "block";
                    modalImg.src = img.dataset.src; // Загружаем полное изображение
                });
            });

            closeBtn.addEventListener("click", () => {
                modal.style.display = "none";
            });

            window.addEventListener("click", (event) => {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
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
    <title>Галерея выполненных работ</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Галерея выполненных работ</h1>
    </header>
    <main>
        <div id="gallery" class="gallery">
            <!-- Изображения будут загружаться сюда -->
        </div>

        <!-- Модальное окно -->
        <div id="modal" class="modal">
            <span class="close">&times;</span>
            <img class="modal-content" id="modal-image">
        </div>
    </main>
    <footer>
        <p>&copy; 2025 Ведьмина служба вышивки</p>
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
