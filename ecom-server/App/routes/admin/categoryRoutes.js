let express=require("express");
const { categoryInsert, readParentCategories } = require("../../controller/admin/categoryContoller");
const { uploads } = require("../../middleware/fileUploadion");
let categoryRoutes=express.Router();



categoryRoutes.post('/insert',uploads('uploads/category').single('categoryImage'),categoryInsert);
categoryRoutes.get('/read-categories', readParentCategories);


module.exports={categoryRoutes}