@echo off
echo Добавление новых изображений...

:: Переход в папку проекта
cd /d X:\Wes\witch-emb-service-app

:: 1. Генерация массива изображений с помощью Node.js
echo Генерация массива изображений...
node generate-images.js

:: Проверка успешности выполнения
if %errorlevel% neq 0 (
    echo Ошибка при генерации массива изображений!
    pause
    exit /b %errorlevel%
)

:: 2. Добавление изменений в Git
echo Добавление изменений в Git...
git add .

:: 3. Создание коммита
echo Создание коммита...
set /p commitMessage=Введите сообщение коммита: 
git commit -m "%commitMessage%"

:: Проверка успешности выполнения
if %errorlevel% neq 0 (
    echo Ошибка при создании коммита!
    pause
    exit /b %errorlevel%
)

:: 4. Отправка изменений на GitHub
echo Отправка изменений на GitHub...
git push

:: Проверка успешности выполнения
if %errorlevel% neq 0 (
    echo Ошибка при отправке изменений на GitHub!
    pause
    exit /b %errorlevel%
)

echo Изменения успешно отправлены на GitHub!
pause