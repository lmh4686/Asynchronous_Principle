
function getJoke() {
    return new Promise((resolve, reject) => {
        req = new XMLHttpRequest() // Use to make requests
        req.addEventListener('load', e => resolve(e.target.response.joke)) // Set 'load' to execute the cb after send() finishes 
        req.open('GET', 'https://icanhazdadjoke.com/')  // Opens a connection to the server
        req.setRequestHeader("Accept", "application/json") // Receives json response
        req.responseType = 'json' // Convert string response to json so you can manipulate the response
        req.send()  // Send a request | Asynchronous
    }) 
}

// //Default to GET verb, Return Promise response
// function fetchJoke() {
//     fetch('https://icanhazdadjoke.com/', {     
//         headers: { 'Accept': 'application/json' }
//     }) 
//     .then(res => res.json())
//     .then(data => console.log(data))
// }
// fetchJoke()

// const jokes = []
// const cb = joke => {
//     jokes.push(joke)
//     return getJoke()
// }

// getJoke()
//     .then(cb)
//     .then(cb)
//     .then(cb)
//     .then(joke => {
//         jokes.push(joke)
//         console.log(jokes)})


// More efficient way
//Promise.all() execute all elements in array
//and wait for the all result 
// const jokePromises = []
// for (let i=0; i < 5; i++) {
//     jokePromises.push(getJoke())
// }


// Promise.all(jokePromises)
//     .then(jokes => console.log(jokes))





// function fetchJoke() {
//     return new Promise((resolve, reject) => {
//         fetch('https://icanhazdadjoke.com/', {     
//             headers: { 'Accept': 'application/json' }
//         }) 
//         .then(res => res.json()) // Wrap raw response to promise json
//         .then(data => resolve(data.joke)) //Extract joke from promise
//     })
// }

// const jokePromises = []
// for (let i=0; i < 5; i++) {
//     jokePromises.push(fetchJoke())
// }


// Promise.all(jokePromises)  //It keeps the original order regardless of time taking.
//     .then(jokes => console.log(jokes))
//     .catch(err => console.error(err))




// function fetchJoke() {
//     return new Promise((resolve, reject) => {
//         fetch('https://icanhazdadjoke.com/', {     
//             headers: { 'Accept': 'application/json' }
//         }) 
//         .then(res => res.json()) // Wrap raw response to promise json
//         .then(data => resolve(data.joke)) //Extract joke from promise
//     })
// }
// function get5jokes() {
//     const jokePromises = []
//     for (let i=0; i < 5; i++) {
//         jokePromises.push(fetchJoke())
//     }
//     Promise.all(jokePromises)  //It keeps the original order regardless of time taking.
//         .then(jokes => document.querySelector('ul').innerHTML += jokes.map(joke => `<li>${joke}</li>`).join('')) //.join('') removes commas
//         .catch(err => console.error(err))
//     }
// document.querySelector('button').addEventListener('click', get5jokes)






//// Dryer version of above
//// Use try/catch for error handling
// async function fetchJoke() {
//     try{
//     const res = await fetch('https://icanhazdadjoke.com/', {     
//         headers: { 'Accept': 'application/json' }
//     }) 
//     const data = await res.json()
//     return data.joke
//     }
//     catch { //Wil be catched on Promise.all's .catch
//         throw new Error('Could not retrieve joke')
//     }
// }
// function get5jokes() {
// const jokePromises = []
// for (let i=0; i < 5; i++) {
//     jokePromises.push(fetchJoke())
// }
// Promise.all(jokePromises)  //It keeps the original order regardless of time taking.
//     .then(jokes => document.querySelector('ul').innerHTML += jokes.map(joke => `<li>${joke}</li>`).join('')) //.join('') removes commas
//     .catch(err => console.error(err))
    
// }
// document.querySelector('button').addEventListener('click', get5jokes)



// function asyncGetJokes() {
//     const result = fetchJoke()
//     console.log(result)
// }
// asyncGetJokes()
// console.log('End of main')

//// async wrap return function's value in promise and change function asynchronous
//// await only works with async and for promise. It waits for promise to be resolved
// async function asyncGetJokes() {
//     const result = await fetchJoke()
//     console.log(result)
// }
// asyncGetJokes()
// console.log('End of main')

// async function asyncGetJokes() {
//     const result = fetchJoke()
//     console.log(result)
// }
// asyncGetJokes()

// console.log('End of main')



function fetchJoke() {
    return new Promise((resolve, reject) => {
        fetch('https://icanhazdadjoke.com/', {     
            headers: { 'Accept': 'application/json' }
        }) 
        .then(res => res.json()) // Wrap raw response to promise json
        .then(data => resolve(data.joke)) //Extract joke from promise
    })
}
function get5jokes() {
    const jokePromises = []
    for (let i=0; i < 5; i++) {
        jokePromises.push(fetchJoke())
    }
    Promise.all(jokePromises)  //It keeps the original order regardless of time taking.
        .then(jokes => loadJokes(jokes)) 
        .catch(err => console.error(err))
    }
// Load and display jokes from localStorage
//Concats the jokes parameter also
function loadJokes(jokes) {
    jokes = JSON.parse(localStorage.jokes || '[]').concat(jokes) // Use localStorage if it's truthy or use '[]'
    localStorage.jokes = JSON.stringify(jokes)
    document.querySelector('ul').innerHTML = jokes.map(joke => `<li>${joke}</li>`).join('') //.join('') removes commas
}
document.querySelector('button').addEventListener("click", get5jokes)
loadJokes([])
