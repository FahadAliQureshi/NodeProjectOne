const dbConnect = require('./mongodb');

 const Delete= async()=>{
    let data = await dbConnect();
    let result = await data.deleteOne({
        name:'Usama'
    })
    console.warn(result);
 }

 Delete();
