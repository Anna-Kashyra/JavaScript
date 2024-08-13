// Створити масив з:
//  - з 5 числових значень
//  - з 5 стічкових значень
//  - з 5 значень стрічкового, числового та булевого типу
//    та вивести його в консоль

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['word1', 'word2', 'word3', 'word4', 'word5'];
let arr3 = [1, 'word1', true, 2, 'word2'];

console.log(arr1);
console.log(arr2);
console.log(arr3);

// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arrEmpty = [];
arrEmpty[0] = 35;
arrEmpty[1] = 'string';
arrEmpty[2] = 47;
arrEmpty[3] = false;
arrEmpty[4] = [9, 8, 7];

console.log(arrEmpty);

// Є масив
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let arr = [2,17,13,6,22,31,45,66,100,-18];

// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// let i = 0;
// while (i < arr.length) {
//     if (arr[i] % 2 > 0) {
//         console.log(arr[i]);
//     }
//     i++;
// }

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 > 0) {
        console.log(arr[i]);
    }
}

// let i = 0;
// while (i < arr.length) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
//     i++;
// }

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        arr[i] = 'okten';
    }
}
console.log(arr);


for (let i = arr.length-1; i >= 0; i--) {
    console.log(arr[i]);
}

// let i = arr.length-1;
// while (i >= 0) {
//     console.log(arr[i]);
//     i--;
// }

let i = arr.length-1;
while (i >= 0) {
    if (arr[i] % 2 > 0) {
        console.log(arr[i]);
    }
    i--;
}

for (let i = arr.length-1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
// вивести тільки числові елементи

let arrAllType = [78, true, 15, 'word', 'word', 9, 34, false, [false, false], 10];

for (const arrAllTypeElement of arrAllType) {
    if (typeof arrAllTypeElement === 'number') {
        console.log(arrAllTypeElement);
    }
}

// Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let j = 0; j < 10; j++) {
    console.log(j);
    document.write(j);
}

// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`<h4>${i}</h4>`);
    }
}

// Створити масив книжок (назва, кількість сторінок, автори, жанри).

const books = [
    {
        title: 'To Kill a Mockingbird',
        pages: 281,
        authors: ['Harper Lee'],
        genres: ['Fiction', 'Classic']
    },
    {
        title: '1984',
        pages: 328,
        authors: ['George Orwell'],
        genres: ['Dystopian', 'Science Fiction', 'Political Fiction']
    },
    {
        title: 'The Great Gatsby',
        pages: 180,
        authors: ['F. Scott Fitzgerald'],
        genres: ['Fiction', 'Tragedy']
    },
    {
        title: 'Good Omens',
        pages: 412,
        authors: ['Neil Gaiman', 'Terry Pratchett'],
        genres: ['Fantasy', 'Comedy', 'Apocalyptic']
    },
    {
        title: 'The Lord of the Rings',
        pages: 1216,
        authors: ['J.R.R. Tolkien'],
        genres: ['Fantasy', 'Adventure', 'Epic']
    },
    {
        title: 'Pride and Prejudice',
        pages: 279,
        authors: ['Jane Austen'],
        genres: ['Romance']
    }
];

// - знайти найбльшу книжку

let maxPages = 0;
let bookWithMaxPages;
for (let i = 0; i < books.length; i++) {
    if (books[i].pages > maxPages) {
        maxPages = books[i].pages;
        bookWithMaxPages = books[i];
    }
}
console.log(bookWithMaxPages);

// - знайти книжку/ки з найбільшою кількістю жанрів

let maxGenres = 0;
let bookWithMaxGenres = [];
for (let i = 0; i < books.length; i++) {
    let numGenres = books[i].genres.length;
    if (numGenres > maxGenres) {
        maxGenres = numGenres;
        bookWithMaxGenres = [books[i]];
    } else if (numGenres === maxGenres) {
        bookWithMaxGenres[bookWithMaxGenres.length] = books[i];
    }
}
console.log(bookWithMaxGenres);

// - знайти книжку/ки з найдовшою назвою

let maxTitle = '';
let bookWithMaxTitle = [];
for (let i = 0; i < books.length; i++) {
    let numTitle = books[i].title.length;
    if (numTitle > maxTitle) {
        maxTitle = numTitle;
        bookWithMaxTitle = [books[i]];
    } else if (numTitle === maxTitle) {
        bookWithMaxTitle[bookWithMaxTitle.length] = books[i];
    }
}
console.log(bookWithMaxTitle);

// - знайти книжку/ки які писали 2 автори

let bookWithTwoAuthors;
for (let i = 0; i < books.length; i++) {
    if (books[i].authors.length === 2) {
        bookWithTwoAuthors = books[i];
    }
}
console.log(bookWithTwoAuthors);

// - знайти книжку/ки які писав 1 автор

let bookWithOneAuthor = [];
for (let i = 0; i < books.length; i++) {
    if (books[i].authors.length === 1) {
        bookWithOneAuthor[bookWithOneAuthor.length] = books[i];
    }
}
console.log(bookWithOneAuthor);

