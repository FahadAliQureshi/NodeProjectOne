// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client=new MongoClient(url);
// const database = 'backend'

const dbConnect = require("./mongodb");

// async function dbConnect() {
//     let result= await client.connect();
//     let db =  result.db(database);
//     let collection = db.collection('one');
//     let response =await collection.find({}).toArray();
//     console.log(response);

// }

// getData();

// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data=>{
//         console.warn(data);
//     }));
    
// })

const main = async ()=>{
    let data= await dbConnect();
    data = await data.find().toArray();
    console.warn(data);
}

main();