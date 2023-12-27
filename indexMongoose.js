const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/backend")

const DetailsSchema = new mongoose.Schema({
    name: String,
    gender: String
})
const main = async () => {
    const Product = mongoose.model('one', DetailsSchema);
    let data = new Product({ name: "John", gender: "male" });
    const result = await data.save();
    console.log(result);
}

main();