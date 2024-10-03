let express=require("express");
const { categoryInsert, readParentCategories, categoryView } = require("../../controller/admin/categoryContoller");
const { uploads } = require("../../middleware/fileUploadion");
let categoryRoutes=express.Router();



categoryRoutes.post('/insert',uploads('uploads/category').single('categoryImage'),categoryInsert);
categoryRoutes.get('/view', categoryView);


module.exports={categoryRoutes}