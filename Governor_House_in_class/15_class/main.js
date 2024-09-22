// // class Animal{
// //     name: string;
// //     constructor(name: string) {
// //         this.name = name;
// //     }
// //     makeSound(){
// //         console.log("Genral1 Sound")
// //     }
// // }
var circle = /** @class */ (function () {
    function circle() {
    }
    circle.prototype.draw = function () {
        console.log("Drawing a circle");
    };
    return circle;
}());
var square = /** @class */ (function () {
    function square() {
    }
    square.prototype.draw = function () {
        console.log("Darwing a square");
    };
    return square;
}());
var s1 = new circle();
s1.draw();
var c1 = new square();
c1.draw();
// class blueben
