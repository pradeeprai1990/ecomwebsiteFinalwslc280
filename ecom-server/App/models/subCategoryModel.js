const mongoose = require('mongoose');


let subcategorySchema=new mongoose.Schema({
    subcategoryName:{
        type:String,
        unique:[true, "subCategory Name already exists.." ]
    },
    parentCatId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    subcategoryDescription:String,
    subcategoryImage:String,
    subcategoryStatus:{
        type:Boolean,
        default:true
    }
    
},{
    timestamps:true
}
)

let subcategoryModel=mongoose.model("subcategory",subcategorySchema)
module.exports={subcategoryModel}
