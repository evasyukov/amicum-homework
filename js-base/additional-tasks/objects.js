/* #1 Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта. */

const obj = {}
obj.name = "John"
obj.surname = "Smith"
console.log(obj)
obj.name = "Pete"
console.log(obj)
delete obj.name
console.log(obj)

/* #2 Напишите функцию isEmpty(obj),
которая возвращает true,
если у объекта нет свойств, иначе false.

Должно работать так:
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false */

let schedule = {}

function isEmpty(obj) {
  for (key in obj) {
    return false
  }
  return true
}

console.log(isEmpty(schedule))

/* #3 Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
const user = {
  name: "John"
};
// это будет работать?               будет
user.name = "Pete"; */

/* #4 У нас есть объект, в котором хранятся зарплаты нашей команды:
Напишите код для суммирования всех зарплат и
сохраните результат в переменной sum. Должно получиться 390.
*/
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}
let sum = 0
for (let key in salaries) {
  sum += salaries[key]
}

console.log(sum)

/* #5 УСоздайте функцию multiplyNumeric(obj),
которая умножает все числовые свойства объекта obj на 2
*/
const menu = {
  width: 200,
  height: 300,
  title: "My menu",
}
function multiplyNumeric(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2
    }
  }
}
multiplyNumeric(menu)

console.log(menu)
