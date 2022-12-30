const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const connectTODB =()=>{
mongoose.connect(process.env.MONGO_URI)
.then((conn)=>{
    console.log(`connected DB: ${conn.connection.host}`);
})
.catch((err)=>{
    console.log(err.message);
    process.exit(1);
})
};

module.exports =connectTODB;