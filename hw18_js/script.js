//task1
document.querySelector(".btn-task1").addEventListener("click", function () {
  var a = Number(document.querySelector(".num1-task1").value);
  var b = Number(document.querySelector(".num2-task1").value);
  if (a > b) {
    let buff = a;
    a = b;
    b = buff;
  }
  var c = a;
  while (a < b) {
    a++;
    c += a;
  }
  document.querySelector(".outnum-task1").innerHTML = c;
});

//task2
document.querySelector(".btn-task2").addEventListener("click", function () {
  var a = Number(document.querySelector(".num1-task2").value);
  var b = Number(document.querySelector(".num2-task2").value);
  var nod = function (n, m) {
    if (m !== 0) {
      var k = n % m;
      return nod(m, k);
    }
    return n;
  };
  document.querySelector(".outnum-task2").innerHTML = nod(a, b);
});

//task3
document.querySelector(".btn-task3").addEventListener("click", function () {
  var a = Number(document.querySelector(".num1-task3").value);
  var arr = [] ,
    i = 0;
  if (a == 0) {
    document.querySelector(".outnum-task3").innerHTML ="У ноля нет делителей!";
    return;
  } else if (a < 0) {
    document.querySelector(".outnum-task3").innerHTML ="Число должно быть положительным!";
    return;
  }
  else {
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
  var a = String(document.querySelector(".num1-task4").value);
  document.querySelector(".outnum-task4").innerHTML = a.length;
});