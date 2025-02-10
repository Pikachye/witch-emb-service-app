@echo off
echo Reload images

cd /d X:\Wes\witch-emb-service-app

if exist script.js (
    del script.js
    echo Старый файл script.js удален.
)

node generate-images.js

git add .

git commit -m "Reload images"

git push

echo Success!
pause