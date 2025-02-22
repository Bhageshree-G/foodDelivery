const mongoose  = require("mongoose")

const mongodbUrl = "mongodb+srv://bhageshreegiri2244:<ezloeiL2HAgCFMVa>@cluster0.h5tk0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connectDB(){
    return mongoose.connect(mongodbUrl)
}


module.exports = connectDB;