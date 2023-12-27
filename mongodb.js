const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'backend';

async function dbConnect() {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('one');
}

module.exports = dbConnect;
