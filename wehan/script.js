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
var c = "21";
var d = '36';
var e = 42;
c = Number(c);
d = Number(d);
var result = a + b + c + d + e;
var num1 = result;
console.log(num1);

var f = '1';
var g = 15;
var h = 8;
var i = "1";
f = Number(f);
i = Number(i);
var result2 = f *= g *= h *= i;
var num2 = result2;
console.log(num2);

var result3 = result /= result2;
document.write(result3);

var result4 = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ]
console.log(result4 [1][1],result4 [4][2],result4 [5][3],result4[2][3],result4[2][1])

var text="Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";
var temp2 = new Array();
temp2 = text.split("$").join(" ");
console.log(temp2);

// array with 5 names, remove the 3rd name from the array (as short solution as possible)

var names=["han","serri","branko","jan","lisa"]
names.splice(2,1);
console.log(names)
// console.log(names.slice(2,3))

// "i am a web developer";
// "I am a web developer";
const text2="i am a web developer";
const text3= text2.charAt(0).toUpperCase();
console.log(text3+text2.substring(1));

// sort() sort numbers  [12,5,55,26,3];
var numbers3 = [12,5,55,26,3];
console.log(numbers3.sort((a, b) => a - b));

// 


// "Welcome fname, you work as jobTitle"
var text5= "Welcome "
var fname2 = prompt(" Your name?");
var fjob= prompt(" your job?");
console.log(text5+fname2+" as "+fjob);

console.log(5+5)