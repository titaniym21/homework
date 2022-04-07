//task1
document.querySelector('.btn-task1').addEventListener('click', function() {
    var a = Number(document.querySelector('.num1-task1').value);
    var b = Number(document.querySelector('.num2-task1').value);
    if (a > b) {
        let buff = a;
        a = b;
        b = buff;
    }
    var c = a;
    while(a < b) {
        a++;
        c += a;
    }
    document.querySelector('.outnum-task1').innerHTML = c ;
});

//task2

