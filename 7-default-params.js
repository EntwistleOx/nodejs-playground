const greeter = (name = 'Anonimous', age) => {
    console.log('Hello ' +name)
}

greeter('Juan')

greeter()

// Defalt params with destructuring
const transaction = (type, { label, stock=0 } = {}) => {
    console.log(type, label, stock)
}

transaction('order')