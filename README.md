# Baisanat Landing

Корпоративный лендинг холдинга **Baisanat** на фреймворке [Astro](https://astro.build/).

## О проекте

- **Фреймворк:** Astro v6
- **Репозиторий:** https://github.com/mr-diamant/baisanat
- **Хостинг:** https://me-qr.kz/baisanat/
- **Дизайн:** Figma, страница `Baisanat`

## Структура

```text
src/
├── components/
│   ├── Header.astro      # Шапка: логотип, язык, меню
│   ├── Hero.astro        # Первый экран (hero)
│   └── HeroCard.astro    # Карточка направления
├── pages/
│   └── index.astro       # Главная страница
└── styles/
    └── global.css        # Глобальные стили и CSS-переменные

public/
├── logo.png              # Логотип Baisanat Holding
├── logo1.png … logo4.png # Логотипы направлений
├── favicon.svg
└── favicon.ico
```

## Команды

| Команда           | Действие                                    |
| :---------------- | :------------------------------------------ |
| `npm install`     | Установить зависимости                      |
| `npm run dev`     | Запустить dev-сервер на `localhost:4321`    |
| `npm run build`   | Собрать статический сайт в `./dist/`        |
| `npm run preview` | Предпросмотр сборки локально                |

## Статус

Сейчас свёрстан **первый (верхний) блок**: шапка, hero, формула Baisanat, экосистема и карточки направлений. Дальнейшие блоки лендинга добавляются пошагово.

## Деплой

Сборка (`./dist/`) выгружается на хостинг `me-qr.kz/baisanat/`.
