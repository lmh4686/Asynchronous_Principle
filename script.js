// function adder(x, y, callback) {
//     setTimeout(() => callback(x + y), 3000) // Delay cb execution for 3 sec
//     console.log('Start') // 1, 2
// }

// //// This two will be shown almost together
// //// Because other codes not waiting for the callback function to be completed.
// adder(5, 10, result => console.log(result))  // 4
// adder(15, 10, result => console.log(result))  // 5

// console.log('Hello') // 3

//////////////////////  //////////////////

// function getJoke(cb) {
//     req = new XMLHttpRequest() // Use to make requests
//     req.addEventListener('load', e => cb(e.target.response.joke)) // Set 'load' to execute the cb after send() finishes 
//     req.open('GET', 'https://icanhazdadjoke.com/')  // Opens a connection to the server
//     req.setRequestHeader("Accept", "application/json") // Receives json response
//     req.responseType = 'json' // Convert string response to json so you can manipulate the response
//     req.send()  // Send a request | Asynchronous
// }

// // // Asynchronous
// // getJoke(joke => console.log(joke))  
// // getJoke(joke => document.body.innerHTML += `<p>${joke}</p>`)  
// // console.log('Waiting for joke...')  // This will be shown first.


// const jokes = []

// // //// This will return an empty array 
// // //// since getJoke() is callback and it's asynchronous
// // //// console.log(jokes) will be executed while waiting for response
// // getJoke(joke => jokes.push(joke))
// // getJoke(joke => jokes.push(joke))
// // getJoke(joke => jokes.push(joke))
// // console.log(jokes)


// // Have to use this way to successfully return jokes in the array
// getJoke(joke => {
//     jokes.push(joke)
//     getJoke(joke => {
//         jokes.push(joke)
//         getJoke(joke => {
//             jokes.push(joke)
//             console.log(jokes)
//         })
//     })
// })




///////////////////////MODULE/////////////////////////////////////////////////



// import foo from './math.js' //Must include math.js
import {add, PI} from './math.js' //Have to remove default from math.js
// import * as foo from './math.js' //Import all exported things from math.js

console.log(add(5, 7) * PI)