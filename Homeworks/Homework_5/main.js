// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно
// за допомоги стрілочних функцій
// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const rectangleArea = (a, b) => a * b;

console.log(rectangleArea(10, 5));
console.log(rectangleArea(7, 4));

// створити функцію яка обчислює та повертає площу кола з радіусом r

const circleArea = radius => 3.14 * radius ** 2;

console.log(circleArea(2));
console.log(circleArea(4));

// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r

const cylinderArea = (radius, height) => 2 * 3.14 * radius * (radius + height);

console.log(cylinderArea(4, 7));
console.log(cylinderArea(3, 4));

// створити функцію яка приймає масив та виводить кожен його елемент

let arr1 = [2, 4, 6, 1, 3, 5];
let arr2 = [9, 7, 5, 8, 6, 4];

const printArray = array => {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}

printArray(arr1);
printArray(arr2);

// Створити функцію яка створює параграф з текстом та виводить його через document.write.
// Текст задати через аргумент

const printParagraph = text => {
    document.write(`<p>${text}</p>`);
}

printParagraph('Any text');

// Створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий

const createUl = text => {
    document.write(`
    <ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>
    `)
}

createUl('some text');

// Створити функцію яка створює ul з елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// та виводить його через document.write

const printUl = (text, liNumber) => {
    document.write('<ul>');
        for (let i = 0; i < liNumber; i++) {
            document.write(`<li>${text}</li>`);
        }
    document.write('</ul>');
}

printUl('some text', 7);

// створити функцію яка приймає масив примітивних елементів (числа, стрінги, булеві),
// та будує для них список (ul li) та виводить його через document.write

let array1 = [true, true, false, 2, 5, 'word', 3];
let array2 = [false, 'word', 4, 8, 2];

const printArrayElement = array => {
    document.write('<ul>');
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write('</ul>');
}
printArrayElement(array1);
printArrayElement(array2);

// Створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let objects1 = [
    { id: 1, name: 'Anna', age: 25 },
    { id: 2, name: 'Boris', age: 30 },
    { id: 3, name: 'Clara', age: 28 },
    { id: 4, name: 'David', age: 35 },
    { id: 5, name: 'Emma', age: 22 }
];

let objects2 = [
    { id: 1, name: 'Felix', age: 27 },
    { id: 2, name: 'Gina', age: 31 },
    { id: 3, name: 'Hugo', age: 29 },
    { id: 4, name: 'Irene', age: 24 },
    { id: 5, name: 'Jack', age: 33 },
    { id: 6, name: 'Kate', age: 26 }
];

const printObject = arr => {
    for (const arrElement of arr) {
        document.write(`<div>
                            <span>${arrElement.id}</span>
                            <span>${arrElement.name}</span>
                            <span>${arrElement.age}</span>
                         </div>`)
    }
}

printObject(objects1);
printObject(objects2);


// створити функцію яка повертає найменьше число з масиву

let arrNumbers = [3, 7, 10, -5, 16, 4, -144];

const smallestNumber = array => {
    let smallestNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        let arrayElement = array[i];
        if (arrayElement < smallestNumber) {
            smallestNumber = arrayElement;
        }
    }
    return smallestNumber;
}

console.log(smallestNumber(arrNumbers));

// створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

const sum = arr => {
    let result=0;
    for (const arrElement of arr) {
        result = result + arrElement;
    }
    return result;
}

console.log(sum (arrNumbers));

// створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах

const swap = (arr, index1, index2) => {
    let tempIndex = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tempIndex;

    return arr;
}

console.log(swap(arrNumbers, 2, 4));

// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD', value:25},{currency:'EUR', value:42}],'USD') // => 400

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let current;
    for (const currencyValue of currencyValues) {
       if (currencyValue.currency === exchangeCurrency) {
           current = currencyValue;
       }
    }
    return sumUAH / current.value;
}
console.log(exchange(10000,[{currency:'USD', value:25},{currency:'EUR', value:42}],'USD'));