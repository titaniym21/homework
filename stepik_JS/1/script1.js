var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892,
    started: false,
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            document.write(this.make + " " +
                this.model + " goes zoom zoom!");
        } else {
            document.write("You need to start the engine first.");
        }
    }
};
var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021,
    started: false,
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            document.write(this.make + " " +
                this.model + " goes zoom zoom!");
        } else {
            document.write("You need to start the engine first.");
        }
    }
};
var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341,
    started: false,
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            document.write(this.make + " " +
                this.model + " goes zoom zoom!");
        } else {
            document.write("You need to start the engine first.");
        }
    }
};


function startCar(car) {
    car.start();
    car.drive();
    car.stop();
}

function carInfo(car) {
    for(var key in car) {
        document.write(`${key}: ${car[key]}<br/>`);
    }
    document.write("<br/>");
}


carInfo(cadi);
carInfo(chevy);
carInfo(taxi);

startCar(cadi);
document.write("<br/>");
startCar(chevy);
document.write("<br/>");
startCar(taxi);
document.write("<br/>");