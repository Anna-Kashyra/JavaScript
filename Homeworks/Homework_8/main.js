// Створити функцію, яка робить глибоку копію об'єкта.
// Додати перевірки на undefined, null, NaN.
// Подумати й реалізувати логіку, в якій кінцевий об'єкт буде мати функції, які в нього були до цього моменту.

const client = {
    id: 1,
    name: 'John',
    email: 'john.doe@example.com',
    print () {
        console.log(client.id)
    },
    greeting () {
        console.log(`Hello, ${client.name}`);
    }
 }
client.print();
client.greeting();

function cloner (obj) {
    if(obj) {
        let functions = [];
        for (const key in obj) {
            if(typeof obj[key] === 'function') {
                const functionClone = obj[key].bind({});
                functions.push({functionClone, key});
            }
        }
        const objClone = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            objClone[func.key] = func.functionClone;
        }
        return objClone;
    }

    throw new Error('Error!')
}

const clientClone = cloner(client);
console.log(clientClone);
clientClone.print();
clientClone.greeting();


// є масив
//// за допомоги map перетворити кожен елемент на наступний тип {id, title, monthDuration}
//  Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

let coursesAndDurationArrayWithId = coursesAndDurationArray.map ((value, index) => ({...value, id: index+1}));

console.log(coursesAndDurationArrayWithId);
