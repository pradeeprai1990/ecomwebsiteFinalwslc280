const { categoryModel } = require("../../models/Category")
let fs=require("fs")
const { subcategoryModel } = require("../../models/subCategoryModel")
let subcategoryInsert=async (req,res)=>{
    
    let obj={
        subcategoryName:req.body.subCategoryName,
        parentCatId:req.body.parentCatId,
        subcategoryDescription:req.body.subcatDescription,
        subcategoryStatus:req.body.status
    }


    if(req.file){
        if(req.file.filename){
            obj['subcategoryImage']=req.file.filename
        }
    }
    let resobj
    try{
        let subcategoryTable=new subcategoryModel(obj)

        let cateRes=await subcategoryTable.save();

        resobj={
            status:1,
            msg:"Data Save",
            cateRes
        }
        res.send(resobj)
    }

    catch(error){
        resobj={
            status:0,
            msg:"Error",
            error
        }
        res.send(resobj)
    }

}

let parentCategory=async (req,res)=>{
    let data=await categoryModel.find({categoryStatus:1})
    let obj={
        status:1,
        data
    }
    res.send(obj)
    
}

let subCategoryview=async (req,res)=>{
    let data=await subcategoryModel.find().populate('parentCatId','categoryName')
    let obj={
        status:1,
        data
    }
    res.send(obj)
    
}
module.exports={subcategoryInsert,parentCategory,subCategoryview}


// items.parentCatId.categoryName