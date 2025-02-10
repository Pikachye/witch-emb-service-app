const express = require('express');
const app = express();
const port = 3000;

// Пример данных (галерея вышивок)
const gallery = [
  { id: 1, title: 'Вышивка 1', description: 'Описание 1', image_url: 'https://example.com/image1.jpg', category: 'Пейзаж' },
  { id: 2, title: 'Вышивка 2', description: 'Описание 2', image_url: 'https://example.com/image2.jpg', category: 'Портрет' }
];

// Получение всех вышивок
app.get('/api/gallery', (req, res) => {
  res.json(gallery);
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});