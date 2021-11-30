// Находим и сохраняем в переменную кнопку с классом button
const button = document.querySelector('.button');
// Находим и сохраняем в переменную div с классом result, куда будем выводить ссылку на геопозицию пользователя
const result = document.querySelector('.result');

// Функция-обработчик геопозиции пользователя
function handlePosition(position) {
  console.log(position);

  // Создаем элемент <a>
  const link = document.createElement('a');
  // Проставляем ему атрибут href
  link.href = `https://www.openstreetmap.org/#map=11/${position.coords.latitude}/${position.coords.longitude}`;
  // и target
  link.target = '_blank';
  // Текст внутри <a>
  link.textContent = 'Моя позиция на карте';

  // Вставлем элемент внутрь div'а в начало
  result.append(link);
}

// Функция-обработчик клика по кнопке
function handleButtonClick() {
  // Получаем текущую позицию и передаем ее обработчик
  navigator.geolocation.getCurrentPosition(handlePosition);
}

// Добавляем обработчик события клика по кнопке
button.addEventListener('click', handleButtonClick);
