//Variable Declaration
//Assignment Challenges
//Talk about var vs. let/const
//Describe reassignment
//Primitive Types Challenges---
//BRONZE: Declare three variables: firstName, lastName, and fullName var firstName, lastName, fullname
//SILVER: Assign three different primitive data types to variables. var myNum = 3, myString = 'My String!', myBool = true;
//GOLD: Declare a new variable, assign a value, then reassign the value. let tempVar = 'An incomplete sentence'; tempVar = 3;

// Math Operators Challenges
//BRONZE: Perform math operations on numbers using the 5 basic operators. Print the result to the console. var num1 = 9 + 1, num2 = 11 - 1, num3 = 2 * 5, num4 = 100 / 5, num5 = 50 % 20
//SILVER: Declare a variable and assign it a value of any number. Use shorthand operators to change the value.var myNum = 10 
//var myNum = 10; console.log(myNum); myNum += 5; console.log(myNum); myNum -= 2; console.log(myNum); myNum *= 5; console.log(myNum); myNum /= 2 ;console.log(myNum); 
//GOLD: Declare two strings. Concatenate the strings and assign the result to a new variable. Print the result to the console. var shortString = 'make no sense.'; var longString = 'When things are out of order they'; var concatString = shortString + longString; console.log(concatString)

//Other Types Challenges
//BRONZE: Declare a variable and assign it the value of an empty object. var myObject = {}
//SILVER: Declare an array which holds three values. Make each value a different data type.
//GOLD: Declare an object which holds a function as one of its keys.
var myObject = {};
var myArray = ['hello!', true, {firstName: 'john', lastName: 'doe'}];
console.log(myObject)
myObject.myFunc = function(num){
    num++
    console.log(num)
}
myObject.myFunc(3)
console.log(myObject)
console.log(myObject.newFunc)

myObject.name = 'jimmy'
console.log(myObject['name'])
console.log(myArray[2].firstName)

function increment(num){
    num++
    console.log(num)
}
function decrement(num){
    num--
    console.log(num)
}
increment(2)
decrement(5)
//Arguments Challenges
//BRONZE: Write a function that accepts an argument and when 
//the function is invoked prints the argument to the console.
//SILVER: Write a function that accepts two arguments and when
//the function is invoked it performs a mathematical operation 
//on the parameters and prints the result to the console
//GOLD: Write a function that accepts two arrays as arguments. 
//When invoked, the function should access the first index of each
//array, concatenate the values and then print the 
//result to the console.
var add = 123
var street = "visionary way"
var city = "Fishers"
var state = "Indiana"
function address(a, b){
    begin = a + b;
    return begin;
}
function address2(c, d){
    end = c + d;
    return end;
}
function concatFunc(first, second, var1, var2, var3, var4){
    console.log(first)
    var address = first(var1, var2)() + second(var3, var4)()
    console.log(address)
}
concatFunc(address, address2, add, street, city, state)

    
var arr1 = ['I', 'you', 'we']
var arr2 = ['run', 'swim', 'cycle']
function concatFunc(potato1, potato2){
    var value1 = potato1[0]
    var value2 = potato2[0]
    var concat = value1 + value2
    console.log(concat)
}
concatFunc(arr1, arr2)
//Return Challenges
//BRONZE: write a function that returns the result of addition
//SILVER: write a function that when invoked calls another function and passes 
//one of its parameters
//GOLD:

//Property Accessors Challenges
//BRONZE:
//SILVER:
//GOLD: