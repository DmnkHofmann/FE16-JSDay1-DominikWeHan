console.log ("Hello my name is Martin")
var age = [25]
console.log ("and I am " + age + "years old")

var players=['Martin', 'Thomas', 'Peter', 'Mathias', 'Niki'];
console.log(players[2]);

var cars=["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferarri"]
console.log(cars.sort());

var fruits = ["apple", "banana", "kiwi"];
fruits.push("orange");
console.log(fruits);
fruits.pop("orange");
console.log(fruits);

var animals=["monkey", "horse", "dog"];
console.log(animals.sort());
animals.unshift("cat");
console.log(animals);

var fruit2 = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var temp = new Array  ();
temp = fruit2.split ("/");
console.log(temp);

var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;
c = Number (c);
d = Number (d);
var result = a+b+c+d+e;
var num1 = result;
console.log(num1);

var f = '1';
var g = 15;
var h = 8;
var i = "1";
var result2 =f*=g*=h*=i;
f = Number (f);
i = Number (i);
var num2 = result2;
console.log(num2);

var result3 = result /= result2
document.write(result3)

var result4 = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ];
console.log(result4 [1][1], result4 [4][2], result4 [5][3], result4 [2][3], result4 [2][1])

var text = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up"
var temp2 = new Array  ();
temp2 = text.split ("$") .join(" ");
console.log(temp2);