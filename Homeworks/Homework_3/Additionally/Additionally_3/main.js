// 1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу

let arr1 = [];
for (let i = 0; i < 50; i++) {
    arr1.push(i * 2);
}
console.log(arr1);

//        b. заповнити його 50 непарними числами за допомоги циклу.

let arr2 = [];
for (let i = 0; i < 50; i++) {
    arr2.push((i * 2) + 1);
}
console.log(arr2);

//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

let arr3 = [];
for (let i = 0; i < 20; i++) {
    arr3.push(Math.floor(Math.random() * 101));
}
console.log(arr3);

//        d. Заповнити масив 20ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)

let arr4 = [];
for (let i = 0; i < 20; i++) {
    arr4.push(Math.floor(Math.random() * 732) + 8);
}
console.log(arr4);

//  2. Вивести за допомогою console.log кожен третій елемент

for (let i = 0; i < arr1.length; i += 3) {
    console.log(arr1[i]);
}

//  3. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним.

for (let i = 2; i < arr3.length; i += 3) {
    if (arr3[i] % 2 === 0) {
        console.log(arr3[i]);
    }
}
//  4. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним та записати їх
//  в новий масив

let arr5 =[];
for (let i = 2; i < arr3.length; i += 3) {
    if (arr3[i] % 2 === 0) {
        arr5.push(arr3[i]);
    }
}
console.log(arr5);

//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [1, 2, 3, 5, 7, 9, 56, 8, 67] -> Має бути виведено 1, 9, 56

for (let i = 0; i < arr3.length; i++) {
    if (arr3[i + 1] % 2 === 0) {
        console.log(arr3[i]);
    }
}

//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.
//  Обрахувати середній чек.

let orders = [100, 250, 50, 168, 120, 345, 188];
let result = 0;
for (let i = 0; i < orders.length; i++) {
    result += orders[i];
}
console.log(result);

//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let arr6 = [];
let arr7 = [];
for (let i = 0; i < 40; i++) {
    arr6.push(Math.floor(Math.random() * 200) + 1);
    arr7.push(arr6[i] * 5);
}
console.log(arr6);
console.log(arr7);

//  8. Створити масив з будь-якими значеннями (стрінги, числа, і т.д.). пройтись по ньому,
//  і якщо елемент є числом - додати його в інший масив.
//
let myArray = [42, "hello", true, 3.14, "world", false, 100, "JavaScript", null, 256];
let numArray = [];
for (const myArrayElement of myArray) {
    if (typeof myArrayElement === 'number') {
        numArray.push(myArrayElement);
    }
}
console.log(numArray);
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id".
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];
for (const elem of citiesWithId) {
    let userId = elem.user_id;
    for (const element of usersWithId) {
        if (element.id === userId) {
            element.address = elem;
            usersWithCities.push(element);
        }
    }
}
console.log(usersWithCities);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let numbers = [23, 42, 56, 77, 89, 90, 12, 34, 55, 68];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити другий порожній масив. За допомогою будь-якого циклу
// скопіювати значення одного масиву в інший.
//
let originalArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let copiedArray = [];

for (let i = 0; i < originalArray.length; i++) {
    copiedArray.push(originalArray[i]);
}

console.log(originalArray);
console.log(copiedArray);

// - Дано масив: ['a', 'b', 'c']. За допомогою циклу for зібрати всі букви в слово.
let letters = ['a', 'b', 'c'];
let word = '';
//
// for (let i = 0; i < letters.length; i++) {
//     word += letters[i];
// }
// console.log(word);

// - Дано масив: ['a', 'b', 'c']. За допомогою циклу while зібрати всі букви в слово.

// let i = 0;
// while (i < letters.length) {
//     word += letters[i];
//     i++;
// }
// console.log(word);

// - Дано масив: ['a', 'b', 'c']. За допомогою циклу for of зібрати всі букви в слово.

for (const letter of letters) {
    word += letter;
}
console.log(word);
