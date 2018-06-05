// topicsCovered = {
//     Monday: ['Declaring and Assigning Variables', 'Primitive Data Types', 'Other data types',
//         'Math Operators', 'Arguments/Parameters in Functions'],
//     Tuesday: ['Git', 'Review functions', 'Return']
// }
// console.log(topicsCovered.Monday)
// function push(day, topic) {topicsCovered[day].push(topic)}
// push('Tuesday', 'Conditionals')

week1 = {
        Monday: ['Declaring and Assigning Variables', 'Primitive Data Types', 'Other data types',
        'Math Operators', 'Arguments/Parameters in Functions'],
        Tuesday: ['Git', 'Review functions', 'Return', 'Conditionals'],
        Wednesday: ['Review Conditionals', 'Scope', 'Hoisting', 'Closures', 'IIFE', 'Do/While Statements', 'For each/of/in loops'],
        Thursday: ['Array Methods', 'Object Methods', 'Keyed Collections', 'Constructor', 'The "new" operator'],
        Friday: []
}
// var firstWeek = {
//         Monday: ['Declaring and Assigning Variables', 'Primitive Data Types', 'Other data types',
//         'Math Operators', 'Arguments/Parameters in Functions'],
//         Tuesday: ['Git', 'Review functions', 'Return'],
//         Wednesday: [],
//         Thursday: [],
//         Friday: []
//     }
// var week2 =  {
//         Monday: [],
//         Tuesday: [],
//         Wednesday: [],
//         Thursday: [],
//         Friday: []
//     }
// var week3 = {
//         Monday: [],
//         Tuesday: [],
//         Wednesday: [],
//         Thursday: [],
//         Friday: []
//     }

// function push(day, topic) {
//     console.log('push',week1)
//     firstWeek[day].push(topic)
// }
// console.log('week1',week1)
// push('Tuesday', 'Conditionals')
// console.log(week1)
var key = true;
topicsCovered= {
    yesterday: [],
    today:  [],
    tomorrow: []
}
function yesterday(){
    console.log(topicsCovered.yesterday)
}
function today(){
    console.log(topicsCovered.today)
}
function tomorrow(){
    console.log(topicsCovered.tomorrow)
}
if(key){refresh()}
yesterday();
today();
tomorrow();

function refresh(){
    topicsCovered.yesterday.push('Git', 'Review', 'Functions', 'Conditionals')
    topicsCovered.today.push('Scope', 'Hoisting', 'Closures', 'IIFE', 'Do/While Statements', 'For each/in/of loops')
    topicsCovered.tomorrow.push('Array Methods', 'Object Methods', 'Keyed Collections', 'Constructor', 'The "new" operator')

}



function Person(first, last, age, eye) {
    this.first = first
}
let q = new Person('quincy', 'williams', 34, 'blue')
console.log(q.first)
console.log(q.last)
console.log(q.last = 'williams')
console.log(q)
firstArray = ['first', 'second', 'third']
secondArray = ['fourth', 'fifth', 'sixth']
thirdArray = []

thirdArray.push(firstArray)
console.log(thirdArray)
thirdArray.push(secondArray)
console.log(thirdArray)

for (let i = 0; i < thirdArray.length; i++) {
    for (let x = 0; x < thirdArray[i].length; x++) {
        const element = thirdArray[i];
        console.log(element[x])   
    }
    
}
