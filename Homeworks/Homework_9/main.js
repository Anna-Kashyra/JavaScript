// створити блок
// додати йому класи wrap, collapse, alpha, beta
// додати стилі(довільні значення): колір фону, колір тексту, розмір тексту
// додати цей блок в body
// клонувати його повністю, та додати клон в body

const block = document.createElement('div');
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.innerText = 'Text in Block';
block.style.background = 'yellow';
block.style.color = 'blue';
block.style.fontSize = '36px';

document.body.appendChild(block);

const clonedBlock = block.cloneNode(true);
document.body.appendChild(clonedBlock);

// Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const array = ['Main','Products','About us','Contacts'];

const elementUl = document.createElement('ul');
for (const arrayElement of array) {
    const elementLi = document.createElement('li');
    elementLi.innerText = arrayElement;
    elementUl.appendChild(elementLi);
}

document.body.appendChild(elementUl);


// Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    const courseBlock = document.createElement('div');
    courseBlock.innerText = `Course title: ${coursesAndDurationArrayElement.title}, duration: ${coursesAndDurationArrayElement.monthDuration} months`;
    document.body.appendChild(courseBlock);
}

// Є масив
// За допомоги скрипта для кожного елементу масиву зробити <div class='item'>,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

for (const course of coursesAndDurationArray) {
    const courseBlock = document.createElement('div');
    courseBlock.classList.add('item');
    const courseTitle = document.createElement('h1');
    courseTitle.classList.add('heading');
    courseTitle.innerText = course.title;
    const courseDuration = document.createElement('p');
    courseDuration.classList.add('description');
    courseDuration.innerText = `Course duration ${course.monthDuration} months`;
    courseBlock.append(courseTitle, courseDuration);
    document.body.appendChild(courseBlock);
}

// Additionally

// Цикл в циклі
// Є масив coursesArray котрий лежить в arrays.js
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення
// окремих властивостей, для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png який лежить в папці з поточним фйлом

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
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
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

for (const coursesArrayElement of coursesArray) {
    const courseBlock = document.createElement('div');

    const courseTitle = document.createElement('h1');
    courseTitle.innerText = coursesArrayElement.title;

    const courseDuration = document.createElement('div');
    courseDuration.classList.add('flex');

    const courseMonthDuration = document.createElement('p');
    courseMonthDuration.innerText = `Course duration: ${coursesArrayElement.monthDuration}`;

    const courseHourDuration = document.createElement('p');
    courseHourDuration.innerText = `Study hours: ${coursesArrayElement.hourDuration}`;

    courseDuration.append(courseMonthDuration, courseHourDuration);

    const courseModules = document.createElement('ul');
    courseModules.innerText = 'Course modules';
    for (const module of coursesArrayElement.modules) {
        const modulesItem = document.createElement('li');
        modulesItem.innerText = module;
        courseModules.appendChild(modulesItem);
    }

    courseBlock.append(courseTitle, courseDuration, courseModules);

    document.body.appendChild(courseBlock);
}

// Створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.

let block1 = document.createElement('div');
block1.textContent = 'Lorem ipsum dolor sit amet, sed quem primis tritani ut. Mea cu audire suavitate, eu exerci facilisis est. Ignota assueverit mea te, cu facer suscipit vel. Vix ut erant accusam, assum option fastidii no pro. Quo dignissim intellegebat te, pro an idque etiam. Ei vix modus vidisse omittantur, et vim modo suas dissentias, duo postea feugait ex.';
block1.style.border = '1px solid black';
block1.style.padding = '10px';

let block2 = document.createElement('div');
block2.textContent = 'Lorem ipsum dolor sit amet, sed quem primis tritani ut. Mea cu audire suavitate, eu exerci facilisis est. Ignota assueverit mea te, cu facer suscipit vel. Vix ut erant accusam, assum option fastidii no pro. Quo dignissim intellegebat te, pro an idque etiam. Ei vix modus vidisse omittantur, et vim modo suas dissentias, duo postea feugait ex. Duo id doctus nusquam, justo consul mollis at vel. Pri ex solet torquatos, vim ne periculis persecuti omittantur, ut sanctus vocibus duo. Probo magna dicat ne vix, vix et ipsum aperiri alterum. Ne cum sale luptatum vituperata, mel cu eirmod delenit expetendis.';
block2.style.border = '1px solid black';
block2.style.padding = '10px';

let block3 = document.createElement('div');
block3.textContent = 'Lorem ipsum dolor sit amet, sed quem primis tritani ut. Mea cu audire suavitate, eu exerci facilisis est. Ignota assueverit mea te, cu facer suscipit vel. Vix ut erant accusam, assum option fastidii no pro. Quo dignissim intellegebat te, pro an idque etiam. Ei vix modus vidisse omittantur, et vim modo suas dissentias, duo postea feugait ex. Duo id doctus nusquam, justo consul mollis at vel. Pri ex solet torquatos, vim ne periculis persecuti omittantur, ut sanctus vocibus duo. Probo magna dicat ne vix, vix et ipsum aperiri alterum. Ne cum sale luptatum vituperata, mel cu eirmod delenit expetendis. Tibique suscipit democritum at pro. Eam et illum molestiae constituto. Mea altera aeterno repudiare an, cu amet officiis cum. Noster constituam definitionem mea at, amet oblique conclusionemque at his. Duo cu volumus invidunt similique, in exerci virtute dissentiet has. At pro qualisque consetetur. An duo lucilius quaestio. An mel adipisci complectitur, his no volumus scribentur, elit accusata id eum. Quo quod accumsan perfecto cu, integre deserunt cotidieque his ei. Quo ei recusabo reformidans delicatissimi, nec ut accusata persecuti contentiones, autem possim salutatus pro ei. An mucius inciderint conclusionemque mel, unum prompta feugait at est.';
block3.style.border = '1px solid black';
block3.style.padding = '10px';

document.body.appendChild(block1);
document.body.appendChild(block2);
document.body.appendChild(block3);

let maxHeight = Math.max(block1.offsetHeight, block2.offsetHeight, block3.offsetHeight);

block1.style.height = block2.style.height = block3.style.height = `${maxHeight}px`;
