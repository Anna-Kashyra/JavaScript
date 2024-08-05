// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

// let greeting = 'hello';
// console.log(greeting);
// let owu = 'owu';
// console.log(owu);
// let com = 'com';
// console.log(com);
// let ua = 'ua';
// console.log(ua);
// let a = 1;
// console.log(a);
// let b = 10;
// console.log(b);
// let c = -999;
// console.log(c);
// let d = 123;
// console.log(d);
// const PI = 3.14;
// console.log(PI);
// let frac = 2.7;
// console.log(frac);
// let num = 16;
// console.log(num);
// let boolean1 = true;
// console.log(boolean1);
// let boolean2 = false;
// console.log(boolean2);

// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

// let firstName = 'Anna';
// let middleName = 'Oleksandrivna';
// let lastName = 'Kashyra';
// let person = `${firstName} ${middleName} ${lastName}`;
// console.log(person);

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let firstName = prompt('Введіть ваше ім"я');
let middleName = prompt('Введіть ваше по-батькові');
let age = +prompt('Введіть ваш вік');
console.log(firstName);
console.log(middleName);
console.log(age);
console.log(`${firstName} ${middleName}, ${age} р.`);
