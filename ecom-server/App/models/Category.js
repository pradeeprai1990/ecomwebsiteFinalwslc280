const mongoose = require('mongoose');


let categorySchema=new mongoose.Schema({
    categoryName:{
        type:String,
        unique:[true, "Category Name already exists.." ]
    },
    categoryDescription:String,
    categoryImage:String,
    categoryStatus:{
        type:Boolean,
        default:true
    }
    
},{
    timestamps:true
}
)

let categoryModel=mongoose.model("category",categorySchema)
module.exports={categoryModel}
