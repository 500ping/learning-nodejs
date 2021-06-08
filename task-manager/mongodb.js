// CRUD
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useUnifiedTopology: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    };

    const db = client.db(databaseName);
    // db.collection('users').insertOne({
    //     name: 'Thang',
    //     age: 23
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     };

    //     console.log(result.ops);
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Nam',
    //         age: 23
    //     },
    //     {
    //         name: 'Hung',
    //         age:23
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert users');
    //     };

    //     console.log(result.ops);
    // });

    db.collection('tasks').insertMany([
        {
            description: 'Todo App',
            completed: false
        },
        {
            description: 'Write a blog arcticle',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks');
        };

        console.log(result.ops);
    });
});

