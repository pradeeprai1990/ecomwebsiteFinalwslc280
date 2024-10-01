const ParentCategory = require("../../models/parentCategory");

let categoryInsert=(req,res)=>{
    const data = req.body;

    if(req.file) data.thumbnail = req.file.filename;

    const dataToSave = new ParentCategory(data);
    
    dataToSave.save()
    .then((response)=>{
        
        res.status(200).json({message:'success', data: response, });
    })
    .catch((error)=>{
        console.log(error);
        if(error && error.code === 11000 && error.keyPattern.name === 1) return   res.status(400).json({message:'please enter a unique name'});
        res.status(500).json({message:'internal server error'});
    })
    
}

const readParentCategories = (req, res)=>{
    ParentCategory.find()
    .then((reqponse)=>{
        const file_path = `${req.protocol}://${req.get('host')}/frank-and-files/admin/`;
        res.status(200).json({message:'success', data:reqponse, file_path})
    })
    .catch((error)=>{
        console.log(error);
        res.status(500).json({message:'internal server error'});
    })
};

module.exports={
    categoryInsert,
    readParentCategories
     };