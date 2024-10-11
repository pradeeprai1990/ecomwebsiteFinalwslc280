let express=require("express");
const { uploads } = require("../../middleware/fileUploadion");
const { parentCategory, subcategoryInsert, subCategoryview } = require("../../controller/admin/subcategoryContoller");
let subcategoryRoutes=express.Router();


subcategoryRoutes.post('/insert',uploads('uploads/subcategory').single('subcategoryImage'),subcategoryInsert);

subcategoryRoutes.get('/parent-category',parentCategory)
subcategoryRoutes.get('/view',subCategoryview)

module.exports={subcategoryRoutes}