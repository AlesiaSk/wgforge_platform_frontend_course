/**
 * Реализовать функцию zipObject которая принимает два аргумента:
 *  - первый аргумент массив идентификаторов свойств объекта
 *  - второй аргумент массив значений свойств объекта
 * В качестве результата выполнения функция должна возвращать объект сформированный
 * из идентификаторов и значений полученных на входе
 *
 *
 * Пример:
 *  zipObject(['a', 'b'], [1, 2]);
 *  // => { 'a': 1, 'b': 2 }
 */
export default function zipObject(keyArray, valueArray) {
  const resultObject = {};
  for (const key in keyArray) {
    if (keyArray.hasOwnProperty(key)) {
      resultObject[keyArray[key]] = valueArray[key];
    }
  }
  return resultObject;
}