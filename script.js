
        const images = ["20241222_154239.jpg","20250114_230828.jpg","20250130_212223.jpg","20250205_215602 (1).jpg"];
        function loadImages() {
            const imageFolder = "images/";
            const gallery = document.getElementById("gallery");
            gallery.innerHTML = ""; // Очищаем галерею
            images.forEach(image => {
                const img = document.createElement("img");
                img.src = imageFolder + image + "?v=1739229017261";
                img.alt = image;
                gallery.appendChild(img);
            });
        }
        window.onload = loadImages;
    