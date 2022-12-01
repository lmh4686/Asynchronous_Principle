function adder(a, b) {
    return a + b
}

function adderPromise(x, y){
//Create a new instance of Promise
    return new Promise((resolve, reject) => {
        if (typeof x === 'number' && typeof y === 'number') {
        const answer = adder(x, y)
        resolve(answer)
        }
        reject('Operands must be numbers')
    })  
}
//Receives resolve/reject value after execution of promise statement
//Use console.error to indicate it's an error in browser
adderPromise(10, 30)
    .then(res => console.log(res))
    .catch(err => console.error(err))

//Dryer way to execute it multiple times
//But asynchronous
const resolved = value => console.log(value)
const error = err => console.error(err)
adderPromise(5, 30).then(resolved, error)
adderPromise(10, 'asdfsda').then(resolved).catch(error)
adderPromise(15, 2).then(resolved).catch(error)

//Change it to synchronous by using promise hell
//Catch only need once.
adderPromise(5, 30)
    .then(value => adderPromise(value, 20))
    .then(resolved)
    .catch(error)
adderPromise(10, 'asdfsda').then(resolved).catch(error)
adderPromise(15, 2).then(resolved).catch(error)
console.log('This will be shown first while promise is solving')

const vals = []
for (let i = 3; i < 10; i++) {
    let j = i + 3
    adderPromise(i, j)
}
