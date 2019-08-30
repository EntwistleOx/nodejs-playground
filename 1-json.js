const fs = require('fs');

// const book = {
//     title: 'Fundation',
//     author: 'Isaac Asimov'
// }

// const bookJSON = JSON.stringify(book) //objeto js a string
// fs.writeFileSync('1-json.json', bookJSON); 

// const dataBuffer = fs.readFileSync('1-json.json') //datos binarios
// const dataJSON = dataBuffer.toString() //datos binarios a string
// const data = JSON.parse(dataJSON) //string a objeto js
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Juan'
data.age = 35
const juanJSON = JSON.stringify(data) 
fs.writeFileSync('1-json.json', juanJSON)