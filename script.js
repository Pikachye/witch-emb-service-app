
        // Автоматически сгенерированный массив изображений
        const images = ["20241222_154239.jpg","20250114_230828.jpg","20250128_224132.jpg","IMG_20250209_211244_777.jpg"];

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
    