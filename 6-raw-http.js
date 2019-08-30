const https = require('https')

const url = 'https://api.darksky.net/forecast/dba771b4bb67da7e66a7d7055e5d281f/40,-75?units=si'

const request = https.request(url, (response) => {
    
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('an error', error)
})
request.end()