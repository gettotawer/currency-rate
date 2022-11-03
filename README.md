# Курсы валют (React)

Реализован весь функционал (основной и дополнительный), требовавшийся в тестовом задании, а именно:
- Приложение должно состоять из двух страниц:
   - Конвертер из одной валюты в другую.
   - Страница с текущими курсами валют.
- На странице конвертора должно быть текстовое поле, в которое можно ввести текст в виде 15 usd in rub, нажать enter и получить результат.
- На странице с текущими курсами пользователь должен видеть «свежие» курсы валют относительно базовой валюты
- Default значение базовой валюты определять по языку браузера. Делать на все возможные валюты не нужно, только доллары и рубли.
- Будет плюсом
    - Возможность изменить базовую валюту

## Стек технологий:
- React,
- CSS,
- JSX.

## Запуск проекта

`npm i` — догружает необходимые модули<br/>
`npm run start` — запускает приложение<br/>

Для полноценной работы приложения необходимо отключить cors защиту браузера, т.к. в используемом api не проставлены cors заголовки.

Данное api предоставляет всего 100 запросов в месяц, поэтому, если закончились запросы, необходимо сменить заголовок `apikey`, который находится в ./src/utils/api.js

## Ссылка на приложение:
