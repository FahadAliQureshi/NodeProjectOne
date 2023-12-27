const dbConnect = require('./mongodb')

const update = async () =>{
    let data =await dbConnect();
    let result = await data.updateMany(
        { name:"Usama"},{
                $set:{
                    gender:'female'
                }
            }
    )
    console.log(result); 
} 

 update();