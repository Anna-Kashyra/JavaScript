// Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при
// натисканні на кнопку зникав елемент з id="text".

const text = document.createElement('p');
text.innerText = 'Some text';
text.id = 'text';

const button = document.createElement('button');
button.innerText = 'Push me';

document.getElementById('disappearing-text').append(text, button);

button.onclick = function () {
    text.style.display = 'none';
}

// Створити інпут який приймає вік людини та кнопку яка підтверджує дію. При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача

let form1 = document.forms.form1;
let input = form1.age;
form1.addEventListener('submit', function () {
    let age = +input.value;
    console.log(typeof age);
    if (age < 18) {
        alert('You are under 18');
    } else if (age === 18) {
        alert('You are 18');
    } else {
        alert('You are more then 18');
    }
});

// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів,
// та вивести об'єкт в документ. Іншими словами: заповнили форму, натиснули кнопку, під формою з'явився блок
// з вашим об'єктом

let form2 = document.forms.form2;
let newBlock = document.createElement('div');
document.form2.appendChild(newBlock);


form2.addEventListener('submit', function (event) {
    event.preventDefault();
    let name = form2.name.value;
    let surname = form2.surname.value;
    let age = form2.age.value;
    let obj = {name, surname, age};
    console.log(obj);
    newBlock.innerHTML = `<h3>${name} ${surname}</h3>
                            <p>Age is ${age} years old</p>`;
})

// Є сторінка, на якій є блок, я кому знаходиться цифра. написати код, який при кожному перезавантажені сторінки
// буде додавати до неї +1

// let currentNumber = +localStorage.getItem('number');
// currentNumber += 1;
// localStorage.setItem('number', currentNumber);
//
// let numberBlock = document.getElementById('number-block');
// numberBlock.innerText = currentNumber;

let numberBlock = document.getElementById('number-block');
let currentNumber;
if (localStorage.getItem('number')) {
    currentNumber = +localStorage.getItem('number');
    currentNumber += 1;
    localStorage.setItem('number', currentNumber);
    numberBlock.innerText = currentNumber;
} else {
    currentNumber = +numberBlock.innerText;
    currentNumber += 1;
    localStorage.setItem('number', currentNumber);
    numberBlock.innerText = currentNumber;
}

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList
// зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію
// про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
const visitTime = new Date().toLocaleString();

sessionsList.push(visitTime);
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));

// Створити конвертор ваги з кг у фунти. дані заповнюються через інпут. При введенні даних обрахунок стається
// миттєво, без натискань додаткових кнопок

const kgInput = document.getElementById('kgInput');
const result = document.getElementById('result');

kgInput.addEventListener('input', function() {
    const kg = +kgInput.value;
    const pounds = kg * 2.2;
    result.textContent = `Weight in Pounds: ${pounds}`;
});

// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage
// та додає в нього об'єкт
// сигнатура функції - addToLocalStorage(arrayName:string,objToAdd:any{}):void

localStorage.setItem('someArray', JSON.stringify([]));

function addToLocalStorage(arrayName, objToAdd) {
    const storedArray = localStorage.getItem(arrayName);
    const array = JSON.parse(storedArray);
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));
}
addToLocalStorage('someArray', { name: 'John', age: 30 });
addToLocalStorage('someArray', { name: 'Jane', age: 25 });


// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість комірок, третій вміст комірок.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

const form3 = document.forms.form3;
const table = document.getElementById('table');

form3.addEventListener('submit', function (event) {
    event.preventDefault();
    const rowsValue = +form3.rows.value;
    const cellsValue = +form3.cells.value;
    const content = form3.content.value;
    for (let i = 0; i < rowsValue; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cellsValue; j++) {
            const td = document.createElement('td');
            td.innerText = content;
            tr.appendChild(td)
        }
        table.appendChild(tr);
    }
})


// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком,
// в середині якого є значення "100 грн"
// при перезавантаженні сторінки до значення додається по 10 грн, але !!!
// зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

let moneyBlock = document.getElementById('money-block');
let lastUpdateTime = localStorage.getItem('lastUpdateTime');
let currentTime = Date.now();

let currentMoney = localStorage.getItem('money') ?
    parseInt(localStorage.getItem('money'), 10) :
    parseInt(moneyBlock.innerText, 10);
if (!lastUpdateTime || (currentTime - lastUpdateTime) > 10000) {
    currentMoney += 10;
    localStorage.setItem('money', currentMoney);
    moneyBlock.innerText = `${currentMoney} грн`;
    localStorage.setItem('lastUpdateTime', currentTime+'');
}
// Змінює значення при перезавантаженні тільки один раз


// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантаженні сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

const items = [];
for (let i = 0; i < 100; i++) {
    items.push({ id: i + 1, name: `Item ${i + 1}` });
}

let currentPage = 0;
const step = 10;

const container = document.getElementById('container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function renderPage() {
    const startIndex = currentPage * step;
    const endIndex = startIndex + step;

    const pageItems = items.slice(startIndex, endIndex);
    container.innerHTML = '';
    for (const pageItem of pageItems) {
        const div = document.createElement('div');
        div.innerText = pageItem.name;
        container.append(div);
    }
    // container.innerHTML = pageItems.map(item => `<div>${item.name}</div>`).join('');

    prevButton.disabled = currentPage === 0;
    nextButton.disabled = endIndex >= items.length;
}

prevButton.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        renderPage();
    }
});

nextButton.addEventListener('click', () => {
    if ((currentPage + 1) * step < items.length) {
        currentPage++;
        renderPage();
    }
});

renderPage();
