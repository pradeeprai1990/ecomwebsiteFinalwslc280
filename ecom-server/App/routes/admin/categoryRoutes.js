let express=require("express");
const { categoryInsert, readParentCategories, categoryView, singleDelete, multiDelete, editRowData, updateCategory } = require("../../controller/admin/categoryContoller");
const { uploads } = require("../../middleware/fileUploadion");
let categoryRoutes=express.Router();



categoryRoutes.post('/insert',uploads('uploads/category').single('categoryImage'),categoryInsert);
categoryRoutes.get('/view', categoryView);
categoryRoutes.delete("/delete/:id",singleDelete)
categoryRoutes.post("/multidelete",multiDelete)

categoryRoutes.get("/editrow/:id",editRowData)

categoryRoutes.put("/updaterow/:id",uploads('uploads/category').single('categoryImage'),updateCategory)
module.exports={categoryRoutes}