// CRUD

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

// Destructuring the code above
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database')
    }
    // Create database if not exist and return an instance
    const db = client.db(databaseName)

    db.collection('users').findOne({name:'Fran'}, (error, result) =>{
        if(error){
            return console.log('Unable to fetch' + error)
        }
        console.log(result)
    })

    db.collection('tasks').findOne({_id:new ObjectID('5d693beae4e79d3e404904b8')}, (error, result) =>{
        if(error){
            return console.log('Unable to fetch' + error)
        }
        console.log(result)
    })

    db.collection('tasks').find({completed: false}).toArray((error, result) =>{
        if(error){
            return console.log('Unable to fetch' + error)
        }
        console.log(result)
    })

    // Sintax 1
    const updatepromise = db.collection('users').updateOne({
        _id: new ObjectID('5d69389d5a0edf0d3c96cfa2')
    }, {
        $set: {
            name: 'Frank'
        }
    })

    updatepromise.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // Sintax 2 chained
    db.collection('users').updateOne({
        _id: new ObjectID('5d69389d5a0edf0d3c96cfa2')
    }, {
        $inc: {
            age: 1
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('users').deleteMany({
        age: 35
    }).then((result) => {
        console.log(result.deletedCount)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('users').deleteOne({
        name: 'Vlad'
    }).then((result) => {
        console.log(result.deletedCount)
    }).catch((error) => {
        console.log(error)
    })
})

