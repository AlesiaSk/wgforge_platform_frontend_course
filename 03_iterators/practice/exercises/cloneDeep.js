/**
 * Реализовать функцию cloneDeep которая копирует объекты по значению с любой глубиной вложенности
 */
export default function cloneDeep(object) {
  const clonedObject = {};
  for (const i in object) {
    if (object.hasOwnProperty(i)) {
      if (object[i] !== null && typeof object[i] === 'object') {
        clonedObject[i] = cloneDeep(object[i]);
      } else clonedObject[i] = object[i];
    }
  }
  return clonedObject;
}
