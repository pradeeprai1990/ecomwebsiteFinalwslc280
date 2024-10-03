const { categoryModel } = require("../../models/Category")

let categoryInsert=async (req,res)=>{



    // 

    let obj={
        categoryName:req.body.categoryName,
        categoryDescription:req.body.categoryDescription,
        categoryStatus:req.body.categoryStatus
    }


    if(req.file){
        if(req.file.filename){
            obj['categoryImage']=req.file.filename
        }
    }
    let resobj
    try{
        let categoryTable=new categoryModel(obj)

        let cateRes=await categoryTable.save();

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



    // const data = req.body;

    // if(req.file) data.thumbnail = req.file.filename;

    // const dataToSave = new ParentCategory(data);
    
    // dataToSave.save()
    // .then((response)=>{
        
    //     res.status(200).json({message:'success', data: response, });
    // })
    // .catch((error)=>{
    //     console.log(error);
    //     if(error && error.code === 11000 && error.keyPattern.name === 1) return   res.status(400).json({message:'please enter a unique name'});
    //     res.status(500).json({message:'internal server error'});
    // })
    
}

const categoryView =async (req, res)=>{
    let categoryData=await categoryModel.find();
    let obj={
        status:1,
        path:process.env.CATEGORYIMGSTATICPATH,
        data:categoryData
    }
    res.status(200).json(obj)
}

//http:localhost:8000/admin/category/view

module.exports={categoryInsert,categoryView}