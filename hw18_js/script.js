//task1
document.querySelector(".btn-task1").addEventListener("click", function () {
  let a = Number(document.querySelector(".num1-task1").value);
  let b = Number(document.querySelector(".num2-task1").value);
  if (a > b) {
    let buff = a;
    a = b;
    b = buff;
  }
  let c = a;
  while (a < b) {
    a++;
    c += a;
  }
  document.querySelector(".outnum-task1").innerHTML = c;
});

//task2
document.querySelector(".btn-task2").addEventListener("click", function () {
  let a = Number(document.querySelector(".num1-task2").value);
  let b = Number(document.querySelector(".num2-task2").value);
  let nod = function (n, m) {
    if (m !== 0) {
      let k = n % m;
      return nod(m, k);
    }
    return n;
  };
  document.querySelector(".outnum-task2").innerHTML = nod(a, b);
});

//task3
document.querySelector(".btn-task3").addEventListener("click", function () {
  let a = Number(document.querySelector(".num1-task3").value);
  let arr = [],
    i = 0;
  if (a == 0) {
    document.querySelector(".outnum-task3").innerHTML = "У ноля нет делителей!";
    return;
  } else if (a < 0) {
    document.querySelector(".outnum-task3").innerHTML =
      "Число должно быть положительным!";
    return;
  } else {
    while (i++ <= a) {
      if (a % i == 0) {
        arr.push(i);
      }
    }
  }
  document.querySelector(".outnum-task3").innerHTML = arr;
});

//task4
document.querySelector(".btn-task4").addEventListener("click", function () {
  let a = String(document.querySelector(".num1-task4").value);
  document.querySelector(".outnum-task4").innerHTML = a.length;
});

//task5
let arr = [];
document.querySelector(".btn1-task5").addEventListener("click", function () {
  arr.push(Number(document.querySelector(".num1-task5").value));
  document.querySelector(".outnum-task5").innerHTML = arr;
});
let arrpos = [];
let arrneg = [];
let arrzero = [];
document.querySelector(".btn2-task5").addEventListener("click", function () {
  for (let item in arr) {
    if (arr[item] > 0) {
      arrpos.push(arr[item]);
    } else if (arr[item] < 0) {
      arrneg.push(arr[item]);
    } else {
      arrzero.push(arr[item]);
    }
  }
  document.querySelector(".posnum-task5").innerHTML =
    "Чисел положительных : " + arrpos.length;
  document.querySelector(".negnum-task5").innerHTML =
    "Чисел отрицательных : " + arrneg.length;
  document.querySelector(".zeronum-task5").innerHTML =
    "Чисел равных нулю : " + arrzero.length;
});

//task6
function task_6() {
  while (true) {
    let a = prompt("Введите первое число");
    let b = prompt("Введите второе число");
    let x = prompt("Введите знак");
    switch (x) {
      case "+":
        alert(Number(a) + Number(b));
        break;
      case "-":
        alert(Number(a) - Number(b));
        break;
      case "*":
        alert(Number(a) * Number(b));
        break;
      case "/":
        alert(Number(a) / Number(b));
        break;
      default:
        alert("Вы ввели неверный знак");
    }
    let y = prompt("Хотите продолжить? Введите да или нет");
    if (y == "нет") {
      break;
    }
  }
}

//task7
document.querySelector(".btn-task7").addEventListener("click", function () {
  let a = Number(document.querySelector(".num1-task7").value);
  let b = Number(document.querySelector(".num2-task7").value);
  let tmp1 = [];
  let tmp2 = [];
  if (String(a).length > b) {
    for (let i = 0; i < String(a).length; i++) {
      if (i < b) {
        tmp1.push(String(a).charAt(i));
      } else {
        tmp2.push(String(a).charAt(i));
      }
    }
    document.querySelector(".outnum-task7").innerHTML =
      tmp2.join("") + tmp1.join("");
  } else if (String(a).length == b) {
    document.querySelector(".outnum-task7").innerHTML = a;
  } else {
    document.querySelector(".outnum-task7").innerHTML =
      "Нет такого количества знаков в числе!";
  }
});
//task8
function task_8() {
  const days = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
  ];
  let currDay = 0;
  while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
    currDay = (currDay + 1) % days.length;
  }
}
//task9
document.querySelector(".btn-task9").addEventListener("click", function () {
  for (let i = 2; i < 10; i++) {
    for (let j = 1; j <= 10; j++) {
      document.querySelector(".outnum-task9").innerHTML +=
        "<div>" + j + "*" + i + "=" + j * i + "</div>";
    }
  }
  document.querySelector(".btn-task9").style.display = "none";
});

//task10
document.querySelector(".btn1-task10").addEventListener("click", function () {
  let x = Number(document.querySelector(".num1-task10").value);
  document.querySelector(".outnum-task10").innerHTML = x;
  let start = 0;
  let end = 100;
  result(start, end);
  function result(a, b) {
    let mid = b - Math.floor((b - a) / 2);
    if (mid == x) {
      document.querySelector(".answer-task10").innerHTML = "Вы угадали!";
    } 
    else {
      document.querySelector(".answer-task10").innerHTML = mid;
      document
        .querySelector(".btn2-task10")
        .addEventListener("click", function () {
          b -= Math.floor((b - a) / 2);
          return result(a, b);
        });
      document
        .querySelector(".btn3-task10")
        .addEventListener("click", function () {
          a += Math.floor((b - a) / 2);
          return result(a, b);
        });
    }
  }
});
