@echo off

cd /d X:\Wes\witch-emb-service-app

node generate-images.js

git add .

git commit -m "Обновление галереи"

git push

echo Success!
pause