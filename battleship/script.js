let arrShip = [];

document.querySelector(".button").addEventListener("click", function () {
    let tmp = document.querySelector(".inputСoordinates").value;
    tmp = tmp.toUpperCase();
    let coordinat;
    if ((tmp[0] < 65 || tmp[0] > 72 || tmp[1] < 49 || tmp[1] > 56) && tmp.length == 2) {
        coordinat = tmp;
        document.querySelector(".message").innerHTML = "OK";
    } else {
        document.querySelector(".message").innerHTML =
            "Введите корректные координаты";
    }
    checkShip(arrShip, coordinat);
});


function radomShip(arr) {
    let tmp;
    for (let i = 0; i < 3; i++) {
        let x = Math.floor(Math.random() * 2);
        let length = 3;
        let char1 = Math.floor(Math.random() * 7);
        let char2 = Math.floor(Math.random() * 7);
        tmp = String.fromCharCode(char1 + 65) + char2;
            if(arr.indexOf(tmp) == -1){
                if(x == 1){
                    arr.push(tmp);
                    let chartest = char2;
                    length--;
                    while (length > 0) {
                        if (chartest < 6) {
                            char2++;
                        } else {
                            char2--;
                        }
                        tmp = String.fromCharCode(char1 + 65) + char2;
                        arr.push(tmp);
                        length--;
                    }
                } else {
                    tmp = String.fromCharCode(char1 + 65) + char2;
                    let chartest = char1;
                    arr.push(tmp);
                    length--;
                    while (length > 0) {
                        if (chartest < 6) {
                            char1++;
                        } else {
                            char1--;
                        }
                        tmp = String.fromCharCode(char1 + 65) + char2;
                        arr.push(tmp);
                        length--;
                    }
                }
            }else{
                i--;
            }
    }
    return arr;
}


radomShip(arrShip);
console.log(arrShip);



function checkShip(arr, data) {
    let tmp = arr.indexOf(data);
    if (tmp == -1) {
        document.querySelector("." + data).classList.add("miss");
    } else {
        document.querySelector("." + data).classList.add("hit");
    }
}


