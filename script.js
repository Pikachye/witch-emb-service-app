
        const images = ["20241116_152237.jpg","20241222_154239.jpg","20250114_230828.jpg","20250128_224132.jpg","20250205_215602 (1).jpg","IMG_20250209_211244_777.jpg"];
        function loadImages() {
            const imageFolder = "images/";
            const gallery = document.getElementById("gallery");
            gallery.innerHTML = ""; // Очищаем галерею
            images.forEach(image => {
                const img = document.createElement("img");
                img.src = imageFolder + image + "?v=1739228247316"; // Добавляем временную метку
                img.alt = image;
                gallery.appendChild(img);
            });
        }
        window.onload = loadImages;
    