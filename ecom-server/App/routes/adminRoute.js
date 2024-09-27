let express=require("express");
const { categoryRoutes } = require("./admin/categoryRoutes");
const { sizeRoutes } = require("./admin/sizeRoutes");
let adminRouteRoutes=express.Router();

adminRouteRoutes.use("/category",categoryRoutes)
adminRouteRoutes.use("/size",sizeRoutes)



module.exports={adminRouteRoutes}