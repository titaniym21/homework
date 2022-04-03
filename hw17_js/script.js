//task_1
function task_1() {
  var age = prompt("Введите ваш возраст");
  if (0 <= age && age <= 12) {
    alert("Ребенок");
  } else if (12 <= age && age <= 18) {
    alert("Подросток");
  } else if (18 <= age && age <= 60) {
    alert("Взрослый");
  } else {
    alert("Пенсионер");
  }
}

//task_2
function task_2() {
  var keyNumber = prompt("Введите число от 0 до 9");
  switch (keyNumber) {
    case "0":
      alert(")");
      break;
    case "1":
      alert("!");
      break;
    case "2":
      alert("@");
      break;
    case "3":
      alert("#");
      break;
    case "4":
      alert("$");
      break;
    case "5":
      alert("%");
      break;
    case "6":
      alert("^");
      break;
    case "7":
      alert("&");
      break;
    case "8":
      alert("*");
      break;
    case "9":
      alert("(");
      break;
  }
}

//task_3
function task_3() {
  var inputNumber = prompt("Введите трехзначное число");
  var firstDigit = inputNumber.charAt(0);
  var secondDigit = inputNumber.charAt(1);
  var thirdDigit = inputNumber.charAt(2);
  if (firstDigit == secondDigit && secondDigit == thirdDigit) {
    alert("Все цифры одинаковые");
  } else if (
    firstDigit == secondDigit ||
    secondDigit == thirdDigit ||
    firstDigit == thirdDigit
  ) {
    alert("Две цифры одинаковые");
  } else {
    alert("Все цифры разные");
  }
}

//task_4
function task_4() {
  var year = prompt("Введите год");
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    alert("Високосный");
  } else {
    alert("Не високосный");
  }
}

//task_5
function task_5() {
  while (true) {
    var number = prompt("Введите пятизначное число");
    if (number.length == 5) {
      break;
    } else {
      alert("Введите пятизначное число");
    }
  }

  var isPolindrom = true;
  for (var i = 0; i < number.length / 2; i++) {
    if (number.charAt(i) != number.charAt(number.length - 1 - i)) {
      isPolindrom = false;
    }
  }
  if (isPolindrom) {
    alert("Полиндром");
  } else {
    alert("Не полиндром");
  }
}

//task_6
function task_6() {
  var colUSD = prompt("Введите количество долларов");
  var currency = prompt(
    "Выбирите валюту на которю хотите обменять: \n 1 - EUR \n 2 - UAN \n 3 - AZN"
  );
  switch (currency) {
    case "1":
      alert(colUSD * 0.91);
      break;
    case "2":
      alert(colUSD * 29.5);
      break;
    case "3":
      alert(colUSD * 1.7);
      break;
  }
}

//task_7
function task_7() {
  var purchaseAmount = prompt("Введите сумму покупки");
  if (200 <= purchaseAmount && purchaseAmount <= 300) {
    alert(
      "Ваша скидка составляет 3% \n Сумма к оплате: " +
        (purchaseAmount - purchaseAmount * 0.03)
    );
  } else if (300 <= purchaseAmount && purchaseAmount <= 500) {
    alert(
      "Ваша скидка составляет 5% \n Сумма к оплате: " +
        (purchaseAmount - purchaseAmount * 0.05)
    );
  } else if (500 <= purchaseAmount) {
    alert(
      "Ваша скидка составляет 10% \n Сумма к оплате: " +
        (purchaseAmount - purchaseAmount * 0.1)
    );
  } else {
    alert("Ваша скидка составляет 0% \n Сумма к оплате: " + purchaseAmount);
  }
}

//task_8
function task_8() {
  var circumference = prompt("Введите длину окружности");
  var perimeterTheSquare = prompt("Введите длину периметра квадрата");
  var radius = circumference / (2 * Math.PI);
  var sideOfTheSquare = perimeterTheSquare / 4;
  if (radius <= sideOfTheSquare / 2) {
    alert("Oкружность поместиться в указанный квадрат");
  } else {
    alert("Окружность не поместиться в указанный квадрат");
  }
}

//task_9
function task_9() {
  var questionNumber = 0;
  var correctAnswer = 0;

  var answer = prompt(
    "Вопрос №" +
      ++questionNumber +
      "\n Какой самый лучший язык программирования? + \n 1 - C# \n 2 - Java \n 3 - JavaScript \n Введите ответ"
  );
  if (answer == "3") {
    correctAnswer++;
  }

  var answer = prompt(
    "Вопрос №" +
      ++questionNumber +
      "\n  Какой язык программирования наиболее удобен для написания веб сценариев? + \n 1 - C# \n 2 - Java \n 3 - JavaScript \n Введите ответ"
  );
  if (answer == "3") {
    correctAnswer++;
  }

  var answer = prompt(
    "Вопрос №" +
      ++questionNumber +
      "\n Какой язык программирования наиболее удобен для написания разметки веб страниц? + \n 1 - HTML \n 2 - CSS \n 3 - JavaScript \n Введите ответ"
  );
  if (answer == "1") {
    correctAnswer++;
  }
  alert("Вы ответили правильно на " + correctAnswer + " вопросов и получили " + (correctAnswer * 10) + " баллов");
}

//task_10
function task_10() {
  var dd = Number(prompt("Введите день"));
  var mm = Number(prompt("Введите месяц"));
  var yy = Number(prompt("Введите год"));
  var nextDay = new Date(yy, mm, dd + 1);
  function numeric(key) {
    if (key < 10) {
      return "0" + key;
    } else {
      return key;
    }
  }
  alert(
    `Следующий день: ${numeric(nextDay.getDate())}.${numeric(
      nextDay.getMonth()
    )}.${nextDay.getFullYear()}`
  );
}
