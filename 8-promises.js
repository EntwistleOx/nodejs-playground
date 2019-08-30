const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b)
            // reject('error')
        }, 2000)
    })
}

// Nested promises, like nested callbacks
add(1,2).then((sum) => {
    console.log(sum)

    add(sum,2).then((sum2) => {
        console.log(sum2)
    }).catch((error) => {
        console.log(error)
    })

}).catch((error) => {
    console.log(error)
})

// Promise chaining
add(1,2).then((sum) => {
    console.log(sum)
    return add(sum, 4)
}).then((sum2) => {
    console.log(sum2)
}).catch((error) => {
    console.log(error)
})

// // Callback Pattern
// const doWorkCallback = (callback) => {
//     setTimeout(() => {
//         callback('This is an error', undefined)
//         callback(undefined, 'This is the result')
//     }, 2000)
// }

// doWorkCallback((error, result) => {
//     if(error) {
//         return console.log(error)
//     }
//     console.log(result)
// })

// // Promise Pattern
// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is the result')
//         reject('This is an error')
//     }, 2000)
// })

// doWorkPromise.then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

//                               Fullfilled
//                            /
//  Promise  ->  pending  ->
//                            \
//                               Rejected
//
// The promise doWorkPromise is pending for the 2 seconds before resolve or reject
// If resolve is called the promise is Fullfilled
// If reject is called the promise is Rejected
