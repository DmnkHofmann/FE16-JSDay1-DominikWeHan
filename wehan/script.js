console.log("hello world");
var age=[25];
console.log("i am "+ age +" years old");

var players=['Martin', 'Thomas', 'Peter', 'Mathias', 'Niki'];
console.log(players[2])

var cars=['Tesla', 'Audi', 'Renault', 'Volvo', 'Mazda', 'Fiat', 'Ferrari'];
console.log(cars.sort());

var fruit=["apple","banana","kiwi"];
fruit.push("orange");
console.log(fruit);
fruit.pop("orange");
console.log(fruit);

var animals=['monkey','horse','dog'];
console.log(animals.sort());
animals.unshift("cat");
console.log(animals);

var fruit2="mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var temp = new Array();
temp = fruit2.split("/");
console.log(temp);

var a = 7;
var b = 14;
var c = 21;
var d = 36;
var e = 42;
var result = a + b + c + d + e;
var num1 = result;
console.log(num1);

var f = 1;
var g = 15;
var h = 8;
var i = 1;
var result2 = f *= g *= h *= i;
var num2 = result2;
console.log(num2);

var result3 = result /= result2;
document.write(result3);

var result4 = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ]
console.log(result4 [1][1],result4 [4][2],result4 [5][3],result4[2][3],result4[2][1])