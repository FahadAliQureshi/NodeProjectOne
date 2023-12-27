const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');
const app = express();


app.use(express.json());
app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data)
});


app.post('/', async (req, resp) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    console.log(req.body)
    resp.send(result)
})


app.put("/:name", async (req, resp) => {
    let data = await dbConnect();
    let result = data.updateOne(
        {name: req.params.name},
        { $set: req.body }
    )
    console.log(req.body);

    resp.send({ result: "ok" })
})

app.delete('/:id',async (req, resp)=>{
    let data = await dbConnect();
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)}) 
    console.log(req.params.id);
    resp.send(result); 
})



app.listen(5000)
