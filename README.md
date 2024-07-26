# Дизайн-система для X-RUN

Этот проект содержит дизайн-систему для X-RUN, включающую цветовые схемы, типографику, отступы и стили компонентов, созданные на основе Bootstrap 5.

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
    <title>X-RUN Design System</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    <div class="container mt-5">
        <div class="row mb-4">
            <div class="col-12">
                <h1 class="display-4">Welcome to X-RUN</h1>
                <p class="lead">This is an example of our design system using Bootstrap.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
