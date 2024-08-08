// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr1 = [1, 2, 3, 'string1', 'string2', 'string3', true, false, 3.14, [4, 5]];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[7]);
console.log(arr1[8]);
console.log(arr1[9]);

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'The Shining, Stephen King',
    pageCount: 384,
    genre: 'horror'
};

let book2 = {
    title: 'City, Valerian Podmohylyny',
    pageCount: 320,
    genre: 'urban novel'
};

let book3 = {
    title: 'Colony, Max Kidruk',
    pageCount: 904,
    genre: 'sci-fi'
};

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'The Shining',
    pageCount: 384,
    genre: 'horror',
    authors: [
        {name: 'Stephen King', age: 76}
    ]
};

let book5 = {
    title: 'City',
    pageCount: 320,
    genre: 'urban novel',
    authors: [
        {name: 'Valerian Podmohylyny', age: 36}
    ]
};

let book6 = {
    title: 'Physics. Textbook 9th grade',
    pageCount: 272,
    genre: 'textbook',
    authors: [
        {name: 'Viktor Baryachter', age: 74},
        {name: 'Serhiy Dovgyi', age: 56}
    ]
};

// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let arr2 = [
    {name: 'Oleg', username: 'Oleg123', password: 'qwerty'},
    {name: 'Olena', username: 'kvitochka', password: '1password1'},
    {name: 'Vasyl', username: 'Vasia', password: '112233'},
    {name: 'Halyna', username: 'HalaHala', password: 'mypassword'},
    {name: 'Mark', username: 'Mark1990', password: '123456789'},
    {name: 'Lesia', username: 'Ukrainka', password: '25021871'},
    {name: 'Nazar', username: 'Wolverine', password: 'marvelforever'},
    {name: 'Daryna', username: 'MissDaryna', password: 'poiuytrewq'},
    {name: 'Lubomyr', username: 'BlackJack', password: 'password'},
    {name: 'Maria', username: 'Marichka', password: 'Marichka'}
];
console.log(arr2[0].password);
console.log(arr2[1].password);
console.log(arr2[2].password);
console.log(arr2[3].password);
console.log(arr2[4].password);
console.log(arr2[5].password);
console.log(arr2[6].password);
console.log(arr2[7].password);
console.log(arr2[8].password);
console.log(arr2[9].password);

// Описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let dayTemp = [
    {morning: 21, afternoon: 28, evening: 23},
    {morning: 19, afternoon: 27, evening: 20},
    {morning: 21, afternoon: 32, evening: 25},
    {morning: 20, afternoon: 29, evening: 24},
    {morning: 21, afternoon: 28, evening: 23},
    {morning: 18, afternoon: 25, evening: 21},
    {morning: 17, afternoon: 23, evening: 17}
];

// Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a,
// що дорівнює 1, 0, -3

// let x = 1;
// // let x = -3;
// // let x = 0;
// if (x !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }

// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число (в першу, другу, третю чи четверту частину години).

// let time = +prompt('Enter the time');
// if (time >= 0 && time <= 14) {
//     console.log('first quarter');
// } else if (time >= 15 && time <= 29) {
//     console.log('second quarter');
// } else if (time >= 30 && time <= 44) {
//     console.log('third quarter');
// } else if (time >= 45 && time <= 59) {
//     console.log('fourth quarter');
// } else {
//     console.log('Enter the number from 0 to 59');
// }

// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).

// let day = +prompt('Enter the day');
// if (day >= 1 && day <= 10) {
//      alert('First decade');
//  } else if (day >= 11 && day <= 20) {
//      alert('Second decade');
//  } else if (day >= 21 && day <= 31) {
//      alert('Third decade');
//  } else {
//      alert('Enter the number from 1 to 31');
//  }

// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let schedule = prompt('Enter the day number');
// switch (schedule) {
//     case '1':
//         alert('Monday: work, work, work');
//         break;
//
//     case '2':
//         alert('Tuesday: work, work, work');
//         break;
//
//     case '3':
//         alert('Wednesday: work, work, work');
//         break;
//
//     case '4':
//         alert('Thursday: work, work');
//         break;
//
//     case '5':
//         alert('Friday: work');
//         break;
//
//     case '6':
//         alert('Saturday: rest all day');
//         break;
//
//     case '7':
//         alert('Sunday: ready to work');
//         break;
// }

// Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

// let a = +prompt('Enter the first number');
// let b = +prompt('Enter the second number');
// if (a === b) {
//     alert('the numbers are equal');
// } else if (a > b) {
//     alert(`${a} is bigger`);
// } else {
//     alert(`${b} is bigger`);
// }

// Є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї
// falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x;
switch (x) {
    case false:
    case 0:
    case null:
    case undefined:
    case '':
    case NaN:
        x = 'default';
        console.log(x);
        break;
}

// З файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super');
}

