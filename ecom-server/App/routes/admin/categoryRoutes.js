let express=require("express");
const { categoryInsert } = require("../../controller/admin/categoryContoller");
const { uploads } = require("../../middleware/fileUploadion");
let categoryRoutes=express.Router();



categoryRoutes.post('/insert',uploads('uploads/category').single('categoryImage'),categoryInsert)


module.exports={categoryRoutes}