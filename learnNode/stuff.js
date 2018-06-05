var counter = function (arr) {
    return 'There are' + arr.length + 'elements in this array.'
}
var myLoop = function () {
    myArr = ['one', 'two', 'three']
    for (let i = 0; i < myArr.length; i++) {
        const element = myArr[i];
        console.log(element)
        console.log(i)
    }
}
module.exports.pi = 3.142

module.exports.myLoop = myLoop;
module.exports.counter = counter;
module.exports.adder = function (a, b){
    console.log( `The sum of the values is ${a + b}`)
}
