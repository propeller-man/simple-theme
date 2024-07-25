# Дизайн-система для X-RUN

Этот проект содержит дизайн-систему для X-RUN, включающую цветовые схемы, типографику, отступы и стили компонентов, созданные на основе Bootstrap.

## Структура

- `css/bootstrap.min.css`: Загружен через CDN.
- `css/colors.css`: Переменные цветов.
- `css/typography.css`: Шрифты и типографика.
- `css/spacing.css`: Переменные отступов.
- `css/custom-bootstrap.css`: Стили для компонентов.
- `index.html`: Пример использования стилей.
- `js/bootstrap.bundle.min.js`: Загружен через CDN.
- `js/theme-toggle.js`: Скрипт для переключения темы (если требуется).
- `js/components.js`: Дополнительные скрипты для компонентов.

## Использование

### Настройка HTML

Включите необходимые CSS и JS файлы в ваш HTML документ. Вот пример настройки для файла `index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.2/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/colors.css" rel="stylesheet">
    <link href="css/typography.css" rel="stylesheet">
    <link href="css/spacing.css" rel="stylesheet">
    <link href="css/custom-bootstrap.css" rel="stylesheet">
    <title>Example</title>
  </head>
  <body>
    <div class="container mt-5">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.2/js/bootstrap.bundle.min.js"></script>
    <script src="js/theme-toggle.js"></script>
    <script src="js/components.js"></script>
  </body>
</html>
