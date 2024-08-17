// - Знайти та вивести довжину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

console.log(str1.length);
console.log(str2.length);
console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());

// - Перевести до нижнього регістру наступні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let str4 = 'HELLO WORLD';
let str5 = 'LOREM IPSUM';
let str6 = 'JAVASCRIPT IS COOL';

console.log(str4.toLowerCase());
console.log(str5.toLowerCase());
console.log(str6.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   '. Почистити її від зайвих пробілів.

let dirtyString = ' dirty string   ';
console.log(dirtyString.trim());

// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';
const stringToArray = str => str.split(' ');
let arr = stringToArray(str);
console.log(arr);

// function stringToArray(str) {
//     if (str) {
//         const strSplit = str.split(' ');
//         return strSplit;
//     }
//     return [''];
// }
//
// console.log(stringToArray(str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0]. За допомогою map перетворити всі об'єкти в масиві на стрінгові.

const numbers = [10 ,8, -7, 55, 987, -1011, 0, 1050, 0]
const stringArray = numbers.map(number => number.toString());
console.log(stringArray);

// - створити функцію sortNums(array,direction), яка приймає масив чисел та сортує його від більшого до меншого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

const nums = [11, 21, 3];
function sortNums(numsArray, direction) {
    if (direction === 'ascending') {
        return numsArray.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return numsArray.sort((a, b) => b - a);
    }
}

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати, залишивши тільки курси з тривалістю більш як 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id, title, monthDuration}

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// const monthDurationSorted = coursesAndDurationArray.sort((a, b) => {
//     return b.monthDuration - a.monthDuration
// });
// console.log(monthDurationSorted);
//
// const monthDurationFiltered = monthDurationSorted.filter(value => value.monthDuration > 5);
// console.log(monthDurationFiltered);
//
// const coursesMapArray = monthDurationFiltered.map(function (value, index, array) {
//     return {...value, id: index + 1};
// })
// console.log(coursesMapArray);

const resultArray = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => ({...value, id: index + 1}));
console.log(resultArray);

// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі бубни
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

const deck = [];
const suits = ['spade', 'diamond','heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack','queen','king', 'ace'];
for (const suit of suits) {
    for (const value of values) {
    const card = {cardSuit: suit, value: value};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        deck.push(card);
    }
}
console.log(deck);

const aceOfSpades = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log('Піковий туз:', aceOfSpades);

const sixes = deck.filter(card => card.value === '6');
console.log('Всі шістки:', sixes);

const redCards = deck.filter(card => card.color === 'red');
console.log('Всі червоні карти:', redCards);

const diamonds = deck.filter(card => card.cardSuit === 'diamond');
console.log('Всі бубни:', diamonds);

const clubsNineAndAbove = deck.filter(card => card.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value));
console.log('Всі трефи від 9 і більше:', clubsNineAndAbove);

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const sortedBySuits = deck.reduce((accumulator, card) => {
    const suit = card.cardSuit;
    accumulator[suit].push(card);

    return accumulator;
}, {
    spade: [],
    diamond: [],
    heart: [],
    clubs: []
});

// const sortedBySuits = deck.reduce((accumulator, card) => {
//     switch (card.cardSuit) {
//         case 'spade':
//             accumulator.spade.push(card);
//             break;
//         case 'diamond':
//             accumulator.diamond.push(card);
//             break;
//         case 'heart':
//             accumulator.heart.push(card);
//             break;
//         case 'clubs':
//             accumulator.clubs.push(card);
//             break;
//     }
//
//     return accumulator;
// }, {
//     spade: [],
//     diamond: [],
//     heart: [],
//     clubs: []
// });

console.log(sortedBySuits);

// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC'],
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

const coursesModulesWithSass = coursesArray.filter(course => course.modules.includes('sass'));
console.log(coursesModulesWithSass);

const coursesModulesWithDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log(coursesModulesWithDocker);
