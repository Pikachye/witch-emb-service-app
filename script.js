
        const images = ["20241116_152237.jpg","20241222_154239.jpg","20250114_230828.jpg","20250205_215602 (1).jpg"];
        function loadImages() {
            const imageFolder = "images/";
            const gallery = document.getElementById("gallery");
            gallery.innerHTML = ""; // Очищаем галерею
            images.forEach(image => {
                const img = document.createElement("img");
                img.src = imageFolder + image + "?v=1739230363113";
                img.alt = image;
                gallery.appendChild(img);
            });
        }
        window.onload = loadImages;
    