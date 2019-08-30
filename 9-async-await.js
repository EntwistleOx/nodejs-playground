const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a < 0 || b < 0) {
                return reject('error')
            }
            resolve(a+b)
        }, 2000)
    })
}

const doWork = async () => {
    const sum = await add(1, 100)
    const sum2 = await add(sum, 50)
    const sum3 = await add(sum2, 150)
    return sum3
}

doWork().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

// Fails becouse doWork() is not a promise
const result = await doWork()
console.log(result);