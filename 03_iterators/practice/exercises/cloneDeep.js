/**
 * Реализовать функцию cloneDeep которая копирует объекты по значению с любой глубиной вложенности
 */
export default function cloneDeep(object) {
  const clonedObject = {};
  for (const key of Object.keys(object)) {
    if (typeof object[key] === 'object' && object[key] !== null) {
      clonedObject[key] = cloneDeep(object[key]);
    } else {
      clonedObject[key] = object[key];
    }
  }
  return clonedObject;
}
