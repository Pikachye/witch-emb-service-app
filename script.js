
        const images = ["20241222_154239.jpg","20250114_230828.jpg","20250128_224132.jpg"];
        function loadImages() {
            const imageFolder = "images/";
            const gallery = document.getElementById("gallery");
            gallery.innerHTML = ""; // Очищаем галерею
            images.forEach(image => {
                const img = document.createElement("img");
                img.src = imageFolder + image + "?v=1739228355090"; // Добавляем временную метку
                img.alt = image;
                gallery.appendChild(img);
            });
        }
        window.onload = loadImages;
    