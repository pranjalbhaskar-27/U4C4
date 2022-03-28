const mongoose=require("mongoose")

const todoSchema=mongoose.Schema(
    {
        title:{type:String,required:true},
        time:{type:Number,required:true},
            userId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"user",
                required:true
            }
    },
    {
    timestamps:true,
    versionKey:false
    }   
)

const Todo=mongoose.model("todo",todoSchema)

module.exports=Todo