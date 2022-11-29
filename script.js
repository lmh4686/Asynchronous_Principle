// function adder(x, y, callback) {
//     setTimeout(() => callback(x + y), 3000)
// }

// adder(5, 10, result => console.log(result))
// adder(15, 20, result => alert(result))

// console.log('Hello')


function getJoke(cb) {
    req = new XMLHttpRequest() // Class in JS act as Postman
    req.addEventListener('load', event => cb(event.target.response.joke)) //After request finish cb executed
    req.open('GET', 'https://icanhazdadjoke.com/') //Open connection with server
    req.setRequestHeader("Accept", "application/json")
    req.responseType = 'json'
    req.send()
}

// getJoke(joke => console.log(joke))
// getJoke(joke => document.body.innerHTML += `<p>${joke}</p>`)

// console.log('Waiting for Joke ...')

const jokes = []

// This will just return empty array
// getJoke(joke => jokes.push(joke))
// getJoke(joke => jokes.push(joke))
// getJoke(joke => jokes.push(joke))
// console.log(jokes)

//// This only return one joke in array too
// getJoke(joke => {
//     jokes.push(joke)
// })
// getJoke(joke => {
//     jokes.push(joke)
//     console.log(jokes)
// })

//// To retrieve two jokes successfully in array.
getJoke(joke => {
    jokes.push(joke)
    getJoke(joke => {
        jokes.push(joke)
        console.log(jokes)
    })
})

