
        const images = ["20241222_154239.jpg","20250114_230828.jpg"];
        function loadImages() {
            const imageFolder = "images/";
            const gallery = document.getElementById("gallery");
            gallery.innerHTML = ""; // Очищаем галерею

            images.forEach(image => {
                const img = document.createElement("img");
                img.src = imageFolder + image;
                img.alt = image;
                img.classList.add("gallery-image"); // Добавляем класс для стилей

                // Добавляем обработчик клика для открытия модального окна
                img.addEventListener("click", () => openModal(imageFolder + image));

                gallery.appendChild(img);
            });
        }

        // Функция для открытия модального окна
        function openModal(imageSrc) {
            const modal = document.getElementById("modal");
            const modalImage = document.getElementById("modal-image");

            modal.style.display = "block"; // Показываем модальное окно
            modalImage.src = imageSrc; // Устанавливаем источник изображения

            // Закрытие модального окна при нажатии на крестик
            const closeBtn = document.querySelector(".close");
            closeBtn.onclick = () => closeModal();

            // Закрытие модального окна при клике вне изображения
            modal.onclick = (event) => {
                if (event.target === modal) {
                    closeModal();
                }
            };
        }

        // Функция для закрытия модального окна
        function closeModal() {
            const modal = document.getElementById("modal");
            modal.style.display = "none"; // Скрываем модальное окно
        }

        window.onload = loadImages;
    