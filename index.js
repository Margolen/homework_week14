// Задание 1
let sayHello = () => {
    // Поиск и получение объекта по id с помощью DOM
    let userName = document.getElementById('user-name');
    // Сохранение в переменную name значение из объекта userName
    let name = userName.value;
    // Вывод сообщения 
    let hello = document.getElementById('hello');
    hello.textContent = 'Привет, ' + name + '!';
}
// Задание 2
function sum() {
    let a = document.getElementById('a');
    let b = document.getElementById('b');
    let result = document.getElementById('result');
    result.textContent = Number(a.value) + Number(b.value);
    let sumField = document.getElementById('sum');
    sumField.style.background = "yellow";
    setTimeout(() => sumField.style.background = "", 2000);
}

function sub() {
    let a = document.getElementById('a');
    let b = document.getElementById('b');
    let result = document.getElementById('result');
    result.textContent = Number(a.value) - Number(b.value);
    let subField = document.getElementById('sub');
    subField.style.background = "brown";
    setTimeout(() => subField.style.background = "", 2000);
}

function mul() {
    let a = document.getElementById('a');
    let b = document.getElementById('b');
    let result = document.getElementById('result');
    result.textContent = Number(a.value) * Number(b.value);
    let mulField = document.getElementById('mul');
    mulField.style.background = "green";
    setTimeout(() => mulField.style.background = "", 2000);
}

function div() {
    let a = document.getElementById('a');
    let b = document.getElementById('b');
    let result = document.getElementById('result');
    result.textContent = Number(a.value) / Number(b.value);
    let divField = document.getElementById('div');
    divField.style.background = "skyblue";
    setTimeout(() => divField.style.background = "", 2000);
}

