
        const images = ["20241116_152237.jpg","20241222_154239.jpg","20250114_230828.jpg","20250205_215602 (1).jpg"];
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
                img.dataset.src = imageFolder + image + "?v=1739258590247"; // Сохраняем путь
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
    