# WB-L2-MemeGenerator
# Генератор мемов
Это веб-приложение, созданное с использованием чистого HTML, CSS и JavaScript, которое позволяет пользователям создавать собственные мемы. Приложение позволяет загружать изображения, добавлять текстовые элементы и настраивать их стиль и положение. Кроме того, вы можете сохранить созданный мем на своем компьютере.
## Демо
https://marias1403.github.io/WB-L2-MemeGenerator
## Функциональность
* Загрузка изображения: Пользователь может загрузить свое собственное изображение, которое будет использоваться для создания мема.
* Добавление текстовых элементов: Приложение позволяет пользователю добавлять несколько текстовых элементов на изображение. Вы можете настраивать текст, цвет, размер и положение для каждого элемента.
* Настройка стиля текста: Вы можете изменять стиль текста, такой как шрифт, выравнивание, жирность и курсив.
* Сохранение мема: После создания мема вы можете сохранить его на своем компьютере, нажав на соответствующую кнопку.
## Технические детали
Этот проект разработан с использованием чистого JavaScript, HTML и CSS.
## Зависимости
* Webpack: Используется для сборки проекта и управления зависимостями.
* Babel: Используется для компиляции современного JavaScript в совместимый с браузерами код.
* CSS-зависимости: Для обработки и оптимизации стилей.
* HTML-Webpack-Plugin: Генерирует HTML-файл, внедряя в него ссылки на собранные ресурсы.

## Инструкция по сборке
Следуйте этим шагам, чтобы собрать и запустить проект локально:
* Убедитесь, что у вас установлен Node.js и npm (Node Package Manager) на вашем компьютере. Если их нет, вы можете загрузить их с официального сайта Node.js.
* Склонируйте репозиторий на свой компьютер или скачайте его как ZIP-архив.
* Перейдите в директорию проекта с помощью командной строки.
* Установите зависимости проекта, выполнив следующую команду:
   ```bash
   npm install
  ```
* Теперь вы можете запустить сервер разработки с помощью команды:
* ```bash
   npm run dev
   ```
  Это запустит локальный сервер и приложение будет доступно по адресу http://localhost:8080. Приложение автоматически перезагрузится при внесении изменений в исходный код.
* Для создания финальной сборки приложения в режиме production выполните команду:
   ```bash
   npm run build
   ```
  Собранные файлы будут доступны в директории dist.
