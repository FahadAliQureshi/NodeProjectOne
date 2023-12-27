const dbConnect = require('./mongodb')

const insert = async () =>{
    const db = await dbConnect();
    const result = await db.insertOne(
        {
            name:'Usama', gender:'male'
        }
    )
    if(result.acknowledged){
    console.log("Data Inserted")
    }
} 

insert();