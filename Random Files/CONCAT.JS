// function greeting(name) {     alert('Hello ' + name); } 
// function processUserInput(callback) {     
//     var name = prompt('Please enter your name.');     
//     callback(name);
// } 
// processUserInput(greeting);

// var add = 123
// var street = " visionary way"
// var city = " Fishers"
// var state = " Indiana"
// function address(a, b) {
//     begin = a + b;
//     return begin;
// };
// function address2(c, d) {
//     end = c + d;
//     return end;
// }
// function concatFunc(first, second, var1, var2, var3, var4, var5) {
//     // console.log(first) first = first(var1, var2)
//     var address = first(var1, var2) + second(var3, var4)
//     var var5 = var5.toUpperCase()
//     console.log(address + var5)
// }
// concatFunc(address, address2, add, street, city, state, ' United States')

// // function joinArr(foo, bar){     addy = address(foo[0], bar[1])
// // console.log(addy) } arr1 = ['you', 'me', 'us'] arr2 = ['them', 'they',
// // 'theirs'] joinArr(arr1, arr2)

// // function test(printTwo) {
// //     printing: {
// //         console.log("One");
// //         if (!printTwo) break printing;
// //         console.log("Two");
// //     }
// //     console.log("Three");
// // }
// // test(false)
// // test(true)


// // function test2(printMe){
// //     if(printMe){
// //     printThis: {
// //         console.log('Printing:', printMe)
// //     }
// // }
// // }

// // test2(!true)
// // test2('a')
// // // Write a function that accepts two arrays as arguments. When invoked, the
// // // function should access the first index of each array, concatenate the values
// // // and then print the result to the console.
// // var nouns = ['I', 'you', 'we']
// // var verbs = ['run', 'swim', 'cycle']
// // var myString = ''
// // function concatFunc(potato1, potato2) {
// //     var value1 = potato1[0]
// //     var value2 = potato2[0]
// //     var concat = value1 + value2
// //     return concat;
// // }
// // function secondConcat() {
// //     concatFunc(verbs, nouns)
// // }
// // function square(x) {
// //     demo = x * x;
// // }
// // var demo = square(3);
// // //  console.log(demo) console.log(square(demo))

// // function concatFunc(a, b) {
// //     return a / b;
// // }
// // //conditional operators{ ==, ===, <, >, >=, <=, &&, ||, != }

// // if (3 > 2 && 3 < 4 || true == 'true' && true != false) {
// //     console.log(true)
// // }
// // // let three = "three" if(three === "three"){     console.log('first', true) }
// // // if(3 === 3){     console.log('second', false) } // 3 == "3" // true == "true"
// // // // true === true // 3 === 3
// // newString = "supercalifragilisticexpialidocious"
// // sliceString = newString.slice(0, -2);
// // console.log(sliceString)

// // var contact = function (name) {
// //     var getContact = function () {
// //         return name;
// //     }
// //     return getContact;
// // }
// // var newContact = contact('Jenn');

// // console.log(newContact());


// // var friend = "Tom";

// // switch (friend) {
// //   case "Fred":
// //     console.log("Hey Fred, let's go golfing.");
// //   case "Karl":
// //     console.log("Let's hang.");
// //     break;
// //   case "John":
// //     console.log("Sorry, I'm busy right now.");
// //     break;
// //   default:
// //     console.log("Hey " + friend + "can I call you back in a minute.");
// //   case "Tom":
// //     console.log('stuff')
// // }


// // topicsCovered = {
// //     Monday: ['Declaring and Assigning Variables', 'Primitive Data Types', 'Other data types',
// //         'Math Operators', 'Arguments/Parameters in Functions'],
// //     Tuesday: ['Git', 'Review functions', 'Return']
// // }
// // console.log(topicsCovered.Monday)
// // function push(day, topic) {topicsCovered[day].push(topic)}
// // push('Tuesday', 'Conditionals')


//Hoisting: Declarations are hoisted, resulting in them being able to be called before being
//declared
console.log(hoisted())
var hoisting = function () {
    return 'Did not get hoisted!'
}
function hoisted() {
    return 'Just got hoisted!'
}
console.log(hoisting());
// /////////ANOTHER HOISTING EXAMPLE
// console.log(shammy)
// var shammy = 'shammy'
// console.log(shammy)
// let shummy = 'shummy'
// console.log(shummy)



//Closure lesson: 
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}
var a = addSquares(2, 3); // returns 13
var b = addSquares(3, 4); // returns 25
console.log(a)
console.log(b)
square(2);
//What is the result of calling square()? Why?
// function printName(first, last){
//     var intro = "I am ";

//     function makeFull(){
//         return intro + first + " " + last;
//     }
//     return makeFull();
// }

// var d = printName("the", "Batman");
// console.log(d);


var quarterback = 'that guy';
console.log(quarterback)
function football(){
    function throwBall(){
        return quarterback = 'Some Guy'
    }
    console.log(quarterback)
    return throwBall()
}
console.log(quarterback)
football()
console.log(quarterback)

// //////IIFE Example
// !(function(){
//     console.log('Immediately invoked!')
// })();
// myArray = [];
// var name = ''
// if(name === 'Quincy'){
//     myArray.push('zero','one', 'two')
// }
// ~(function(){
//     for (let i = 0; i < myArray.length; i++) {
//         const element = myArray[i];
//         console.log(element)       
//     }
// })();

var result = (function () { 
    var name = "Barry"; 
    return name; 
})(); 
result = "barry";
console.log(result)
console.log(name)

// var result = "";
// var i = 0;

// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 5);

// console.log(result);
// // expected result: "12345"
// var cars = ["BMW", "Volvo", "Saab", "Ford"];
// var i = 0;
// var text = "";

// for (;cars[i];) {
//     text += cars[i] + "<br>";
//     i++;
// }
// console.log(text)

var result = "";
var i = 0;
do {
      if(i == 5){return}
  i = i + 1;
  result = result + i;
  console.log(i)
} while (i < 10);

// myBool = true i = 0; text = ''; while (myBool) {     console.log(myBool) }

var result = "";
var i = 0;

do {
    i = i + 1;
    result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"
myArr = [1, 2, 3]
i = 0
do {
    console.log(myArr[i])
    i++
} while (i < myArr.length);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

var result = "";
var i = 0;
do {
    if (i == 5) {
        return i
    }
    i = i + 1;
    result = result + i;
    console.log(i)
} while (i < 10);
