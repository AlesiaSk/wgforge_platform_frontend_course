/**
 * Задача 1: написать функцию smoosh, которая принимает массив, "выравнивает" вложенные массивы
 * в одноуровневый массив и возвращает новый плоский массив.
 * Например:
 * smoosh([1, 2, [3, 4], 5])
 * > [1, 2, 3, 4, 5]
 * Входной массив может содержать массивы любого уровня вложенности.
 * Например: [[1, 2], [3, [4, [5]]]]
 *
 * Задача 2: написать функцию squeeze (по аналогии со smoosh) таким образом,
 * чтобы она модифицировала исходный массив, а не возвращала новый.
 *
 * Задача 3*: для функций smoosh и squeeze добавить валидацию входного параметра.
 * В случае, если на вход передан не массив функция должна выбросить исключение
 * с сообщением 'argument should be an array'.
 */

function smoosh(array) {
  if (Array.isArray(array)) {
    return array.reduce(function(prevElement, currentElement) {
      return prevElement.concat(
        Array.isArray(currentElement) ? smoosh(currentElement) : currentElement
      );
    }, []);
  }

  throw new Error('argument should be an array');
}

function squeeze(array) {
  if (Array.isArray(array)) {
    const copiedArray = [...array];
    array.splice(0, array.length);
    [].push.apply(array, smoosh(copiedArray));

    return array;
  }

  throw new Error('argument should be an array');
}

export { smoosh, squeeze };
