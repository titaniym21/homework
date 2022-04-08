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
  var arr = [],
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
  var a = String(document.querySelector(".num1-task4").value);
  document.querySelector(".outnum-task4").innerHTML = a.length;
});

//task5
var arr = [];
document.querySelector(".btn1-task5").addEventListener("click", function () {
  arr.push(Number(document.querySelector(".num1-task5").value));
  document.querySelector(".outnum-task5").innerHTML = arr;
});
var arrpos = [];
var arrneg = [];
var arrzero = [];
document.querySelector(".btn2-task5").addEventListener("click", function (){
  for(var item in arr){
    if(arr[item]>0){
      arrpos.push(arr[item]);
    }else if(arr[item]<0){
      arrneg.push(arr[item]);
    }else{
      arrzero.push(arr[item]);
    }
  }
  document.querySelector(".posnum-task5").innerHTML = "Чисел положительных : " + arrpos.length;
  document.querySelector(".negnum-task5").innerHTML = "Чисел отрицательных : " + arrneg.length;
  document.querySelector(".zeronum-task5").innerHTML ="Чисел равных нулю : " + arrzero.length ;
});

