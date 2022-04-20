//task_1
function task_1(){
    let name = prompt("Введите имя");
    alert(`Привет, ${name}`);
}
//task_2
function task_2(){
let yearBirthday = prompt("Введите год рождения");
const currentYear = 2022;
alert(`Ваш возраст ${currentYear - yearBirthday}`);
}
//task_3
function task_3(){
let sideOfTheSquare = prompt("Введите длину стороны квадрата");
alert(`Площадь квадрата ${sideOfTheSquare * sideOfTheSquare}`);
}
//task_4
function task_4(){
let radius = prompt("Введите радиус круга");
alert(`Площадь круга ${Math.PI * radius * radius}`);
}
//task_5
function task_5(){
let distance = prompt("Введите расстояние между городами");
let time = prompt("Введите время в пути");
alert(`Нужно ехать со скоростью ${distance / time} км/ч `);
}
//task_6
function task_6(){
let dollar = prompt("Введите сумму в долларах");
const dollarToEuro = 0.91;
alert(`Сумма в евро ${dollar * dollarToEuro}`);
}
//task_7
function task_7(){
let volume = prompt("Введите объем флешки в Гб");
const volumeToMb = 1024;
alert(`Количестов файлов по 820 Мб ${Math.floor(volume * volumeToMb / 820)}`);
}
//task_8
function task_8(){
let amountOfMoney = prompt("Введите сумму денег в кошельке");
let constOfChocolate = 24;
alert(`Вы можете купить ${Math.floor(amountOfMoney / constOfChocolate)} шоколадок`);
}
//task_9
function task_9(){
let numeric = prompt("Введите число");
alert(`Обратный порядок числа ${numeric%10}${Math.floor((numeric%100)/10)}${Math.floor(numeric/100)}`);
}
//task_10
function task_10(){
let integerNumber = prompt("Введите целое число");
alert ((integerNumber == 0) ? "ноль" : ((integerNumber%2 == 0) ? "четное" : "нечетное" ));
}