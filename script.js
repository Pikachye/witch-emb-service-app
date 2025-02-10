
        const images = ["20241222_154239.jpg"];
        function loadImages() {
            const imageFolder = "images/";
            const gallery = document.getElementById("gallery");
            gallery.innerHTML = ""; // Очищаем галерею
            images.forEach(image => {
                const img = document.createElement("img");
                img.src = imageFolder + image + "?v=1739228814687";
                img.alt = image;
                gallery.appendChild(img);
            });
        }
        window.onload = loadImages;
    