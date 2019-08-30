// Object property shorthand

const name = 'Juan'
const userAge = '35'

const user = {
    name,
    age: userAge,
    location: 'Santiago'
}

console.log(user)

// Object distructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 3
}

// const label = product.label
// const price = product.price
// console.log(label, price)

// const { label:productLabel, price, rating = 5 } = product
// console.log(productLabel, price, rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)