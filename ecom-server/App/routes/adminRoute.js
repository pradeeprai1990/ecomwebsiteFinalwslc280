let express=require("express");
const { categoryRoutes } = require("./admin/categoryRoutes");
const { sizeRoutes } = require("./admin/sizeRoutes");
const { subcategoryRoutes } = require("./admin/subcategoryRoutes");
let adminRouteRoutes=express.Router();

adminRouteRoutes.use("/category",categoryRoutes)
adminRouteRoutes.use("/subcategory",subcategoryRoutes)
adminRouteRoutes.use("/size",sizeRoutes)



module.exports={adminRouteRoutes}