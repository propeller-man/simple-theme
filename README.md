# Дизайн-система для X-RUN

Этот проект содержит дизайн-систему для X-RUN, включающую цветовые схемы, типографику, отступы и стили компонентов, созданные на основе Bootstrap.

## Структура

design-system/
│
├── css/
│   ├── bootstrap.min.css       # Загружен через CDN
│   ├── colors.css              # Наши собственные определения цветов
│   ├── typography.css          # Настройки типографики
│   ├── spacing.css             # Настройки отступов
│   ├── custom-bootstrap.css    # Переопределенные стили Bootstrap
│
├── js/
│   ├── bootstrap.bundle.min.js # Загружен через CDN
│   ├── theme-toggle.js         # Скрипт переключения тем
│   ├── components.js           # Скрипты компонентов
│
├── index.html
└── README.md

## Использование

### Настройка HTML

Включите необходимые CSS и JS файлы в ваш HTML документ. Вот пример настройки для файла `index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
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
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
