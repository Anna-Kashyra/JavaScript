// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User  (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}

const users = [
    new User(1, 'John', 'Doe', 'john.doe@example.com', '+1234567890'),
    new User(10, 'Jane', 'Smith', 'jane.smith@example.com', '+1234567891'),
    new User(6, 'Michael', 'Johnson', 'michael.johnson@example.com', '+1234567892'),
    new User(4, 'Emily', 'Davis', 'emily.davis@example.com', '+1234567893'),
    new User(8, 'William', 'Brown', 'william.brown@example.com', '+1234567894'),
    new User(3, 'Olivia', 'Wilson', 'olivia.wilson@example.com', '+1234567895'),
    new User(7, 'James', 'Taylor', 'james.taylor@example.com', '+1234567896'),
    new User(5, 'Sophia', 'Anderson', 'sophia.anderson@example.com', '+1234567897'),
    new User(9, 'Daniel', 'Thomas', 'daniel.thomas@example.com', '+1234567898'),
    new User(2, 'Isabella', 'Moore', 'isabella.moore@example.com', '+1234567899')
];

console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id
// (filter)

const evenIdUsers = users.filter(user => user.id % 2 === 0);
console.log(evenIdUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id по зростанню (sort)

const sortedUsers = users.sort((a, b) => {
    return a.id - b.id;
});
console.log(sortedUsers);

// - створити клас для об'єктів Client з полями id, name, surname, email, phone, order (поле є масивом зі списком
// товарів). Створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const clients = [
    new Client(1, 'John', 'Doe', 'john.doe@example.com', '+1234567890', ['item1', 'item2']),
    new Client(10, 'Jane', 'Smith', 'jane.smith@example.com', '+1234567891', ['item1']),
    new Client(6, 'Michael', 'Johnson', 'michael.johnson@example.com', '+1234567892', ['item3', 'item4', 'item5']),
    new Client(4, 'Emily', 'Davis', 'emily.davis@example.com', '+1234567893', ['item2', 'item4']),
    new Client(8, 'William', 'Brown', 'william.brown@example.com', '+1234567894', ['item1', 'item5']),
    new Client(3, 'Olivia', 'Wilson', 'olivia.wilson@example.com', '+1234567895', ['item1', 'item2', 'item3']),
    new Client(7, 'James', 'Taylor', 'james.taylor@example.com', '+1234567896', ['item4']),
    new Client(5, 'Sophia', 'Anderson', 'sophia.anderson@example.com', '+1234567897', ['item3', 'item5']),
    new Client(9, 'Daniel', 'Thomas', 'daniel.thomas@example.com', '+1234567898', ['item2']),
    new Client(2, 'Isabella', 'Moore', 'isabella.moore@example.com', '+1234567899', ['item1', 'item4', 'item5'])
]
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його за кількістю товарів в полі order
// по зростанню. (sort)

const sortedByItemsNumber = clients.sort((a, b) => {
    return a.order.length - b.order.length;
});
console.log(sortedByItemsNumber);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в
// поточний об'єкт car

// function Car (model, producer, year, maxSpeed, engineVolume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     this.info = function () {
//         for (const fieldName in Car) {
//             console.log(fieldName, Car[fieldName]);
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         console.log(this.maxSpeed = this.maxSpeed + newSpeed);
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// const car = new Car('opel astra', 'opel', 2023, 210, 1199);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(4);
// car.changeYear(2021);
// car.addDriver({driverName: 'vasia', age: 25});

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його
// в поточний об'єкт car

class Car {
    constructor (model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info () {
        for (const fieldName in Car) {
            console.log(fieldName, Car[fieldName]);
        }
    }
    increaseMaxSpeed (newSpeed) {
        console.log(this.maxSpeed = this.maxSpeed + newSpeed);
    }
    changeYear (newValue) {
        this.year = newValue;
    }
    addDriver (driver) {
        this.driver = driver;
    }
}

const car = new Car('opel astra', 'opel', 2023, 210, 1199);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(4);
car.changeYear(2021);
car.addDriver({driverName: 'vasia', age: 25});
console.log(car);

// -створити клас/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [
    new Cinderella('Cinderella 1', 18, 36),
    new Cinderella('Cinderella 2', 19, 40),
    new Cinderella('Cinderella 3', 20, 35),
    new Cinderella('Cinderella 4', 21, 38),
    new Cinderella('Cinderella 5', 22, 39),
    new Cinderella('Cinderella 6', 23, 36),
    new Cinderella('Cinderella 7', 24, 37),
    new Cinderella('Cinderella 8', 25, 38),
    new Cinderella('Cinderella 9', 26, 35),
    new Cinderella('Cinderella 10', 27, 39)
];

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let prince = new Prince('Prince Charming', 30, 37);

let matchedCinderella;

for (let cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoeSize) {
        matchedCinderella = cinderella;
    }
}
if (matchedCinderella) {
    console.log(`Попелюшка для принца: ${matchedCinderella.name}, вік: ${matchedCinderella.age}, розмір ноги: ${matchedCinderella.footSize}`);
} else {
    console.log('Попелюшка для принца не знайдена');
}

let foundCinderella = cinderellas.find(cinderella => cinderella.footSize === prince.shoeSize);

if (foundCinderella) {
    console.log(`Попелюшка для принца: ${foundCinderella.name}, вік: ${foundCinderella.age}, розмір ноги: ${foundCinderella.footSize}`);
} else {
    console.log('Попелюшка для принца не знайдена');
}

// Через Array.prototype. створити власний foreach, filter

Array.prototype.myForEach = function(callback) {
    for (const item of this) {
        callback(item);
    }
};

let arr = [1, 2, 3, 4, 5];
arr.myForEach(function(item) {
    console.log(item);
});

Array.prototype.myFilter = function(callback) {
    let result = [];
    for (const item of this) {
        if (callback(item)) {
            result.push(item);
        }
    }
    return result;
};

let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.myFilter(function(item) {
    return item % 2 === 0;
});

console.log(evenNumbers);

