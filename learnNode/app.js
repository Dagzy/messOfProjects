var fs = require('fs');
var https = require('https')
var response;
// console.log(https.get())
var url = 'https://www.swapi.co/api/planets/1/'
https.get(url, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      body = JSON.parse(body);
      return response = body
      console.log(body.name);
    });
  });



// var readStream = fs.createReadStream(__dirname + '/test.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/pipey/sometext.js');
// setTimeout(() => pipey = require('./pipey/sometext'), 1000);

// fetch('http swapi.co/api/planets/1/').then((result)=>{console.log(result)})
// var myPromise = new Promise((good, bad) => {
//     console.log(pipey)
//     if (pipey) {
//         good('it is there');
//     }
//     // good(['one', 'two', 'three'])
//     bad('bad');
// });
// //fetch into a promisez
// readStream.pipe(myWriteStream);
// setTimeout(() => myPromise.then(() => console.log(pipey.myFunc())), 3000);
// var pipey = 'a';

// class Person extends events{     constructor(name){         super()
// this.name = name     } } var doog = new Person('doog') var rabes = new
// Person('rabes') var beans = new Person('beans') var people = [doog, rabes,
// beans] people.forEach(function(person){     person.on('speak',
// function(mssg){         console.log(person.name + ' said ' + mssg)     }) })
// beans.emit('speak', 'hey dudes')