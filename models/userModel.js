const mongoose = require("mongoose")

const Schema = mongoose.Schema

const TodoSchema = new Schema({
    title:{  
    type:String,
    },
    tasks: {
        type:[String]
},
},
{
    timestamps:true
}
)

module.exports =("Todo", TodoSchema);