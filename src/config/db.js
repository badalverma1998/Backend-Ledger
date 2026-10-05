const mongoose = require("mongoose")


async function connectToDB(){
     await mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Server is connected to DB")
    })
    .catch(err =>{
        console.log("Error connecting ot DB")
        process.exit(1)
    })

}


module.exports = connectToDB