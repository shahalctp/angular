const mongoose=require("mongoose")


mongoose.connect("mongodb://localhost:27017/ANGJULY",{
    useNewUrlParser:true
})


const Data=mongoose.model("Data",{
    acno:Number,
    name:String,
    pswd:String,
    balance:Number,
    transaction:Array
})

module.exports={Data}


