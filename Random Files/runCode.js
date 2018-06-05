/////////ARRAY REVIEW/////////////////
// 1. Create an array of cars with 3 values, then print all three to the
// console.
function Car(make, model, year) {
    this.make = make,
    this.model = model,
    this.year = year
}
let myArr = []
let secondArr = []
let thirdArr = []
let myCar = new Car('ford', 'model-T', 1910)
let yourCar = new Car('tesla', 'roadster', 2018)
let theirCar = new Car('pontiac', 'trans am', 1977)
myArr.push(myCar)
myArr.push(yourCar)
myArr.push(theirCar)
// Uncomment below: an example of reducing the push methods for myArr down to a
// single line. myArr.push(myCar, yourCar, theirCar)
console.log(myArr)
//below is an example of reducing lines of code and variable assignment.
secondArr.push(new Car('ford', 'model-T', 1910))
console.log(secondArr)
// below is an example of what may be an unexpected result. The first console
// returns 1, which is "true" where 0 = "false". This is because it is saying
// that the process completed successfully.
console.log(thirdArr.push(new Car('ford', 'model-T', 1910)))
console.log(thirdArr)
// 2. Create an array with multiple data-types and print each to the console.
let multiArray = [
    7,
    true,
    'address', {
        name: {
            first: 'john',
            last: 'doe'
        }
    },
    [
        42,
        7,
        11,
        13,
        6,
        5
    ]
]
console.log(multiArray);
// 3. Several of the string methods will also work with arrays. Though we'll go
// further into detail on array methods later, play around with a few of them.
// concat() indexOf() slice() valueOf()
// //////////////////////////////////////////////////////////////////////////////
// /////////////////////
// 1. Create 4 arrays of 4 elements each. Print to the console the first element
// of the first array, the second element of the second array, the third element
// of the third array, and the fourth element of the fourth array.
arr1 = ['first', 'second', 'third', 'fourth']
console.log(arr1[0])
arr2 = ['first', 'second', 'third', 'fourth']
console.log(arr2[1])
arr3 = ['first', 'second', 'third', 'fourth']
console.log(arr3[2])
arr4 = ['first', 'second', 'third', 'fourth']
console.log(arr4[3])
////////////////////////////////////////////////////////////////////////////////
// ///////////////////////// The following commands tell a story about an array
// being populated and taken over by a despot who is defeated by a hero and
// power is restored to the rightful ruler of the kingdom.
kingdom = []
exile = []
console.log(kingdom);
kingdom.push('kingElement')
console.log(kingdom);
// kingdom.pop([1]) console.log(kingdom); kingdom.unshift('prince(ss)Element')
// console.log(kingdom); kingdom[1] = 'usurperElement' console.log(kingdom);
// exile.push(kingdom[0]) console.log('The ' + exile + ' is in exile!')
// kingdom.shift('prince(ss)Element') console.log(kingdom); kingdom[1] =
// 'protagonistElement' console.log(kingdom); kingdom.reverse()
// console.log(kingdom); kingdom = kingdom.slice(0, 1) console.log(kingdom);
// kingdom = exile.concat(kingdom) console.log(kingdom);
// //////////////////////////////////////////////////////////////////////////////
// ////////////////////////
// 1. Create an array and populate it. Print the length to the console.
arrayLength = ['one1', 'two2', 'three3', 'four4']
console.log(arrayLength.length)
////////////////////////////////////////////////////////////////////////////////
////////////////////////// HERE'S A FILTER LESSON
filterThis = [0, 1, 2, 3, 4]
function filtering(element) {
    if (element >= 2) 
        return element
}
let filteredArr = filterThis.filter(filtering)
console.log(filteredArr)

// //HERE'S AN UNSHIFT() LESSON
unshiftArr = ['a', 'great', 'day']
console.log(unshiftArr)

// We know that the result of .push() is adding an element to the end, like
// this...
unshiftArr.push('Have')
console.log(unshiftArr)

//So, let's get rid of the added element, since it's out of place...
unshiftArr.pop()
console.log(unshiftArr)

// And finally, add the element to the beginning, using .unshift() to put it in
// the appropriate place
unshiftArr.unshift('Have')
console.log(unshiftArr)

//We haven't discussed Try/Catch and Throw. 
//THE BELOW EXAMPLE SHOWS HOW THE 'THROW' KEYWORD WORKS, USING A CONDITIONAL
function addNumbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw "One of the parameters is not a number";
    } else {
        return a + b;
    }
}
addNumbers(1, 2)
numbah = addNumbers(addNumbers(1, 2), addNumbers(3, 4))
console.log(numbah)
addNumbers('a', 2)
console.log(addNumbers('', 2))