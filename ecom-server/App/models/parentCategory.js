const mongoose = require('mongoose');

const parentCategorySchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    description:String,
    status:{
        type:Boolean,
        default:true
    },
    thumbnail:String,
    created_at:{
        type:Date
    },
    updated_at:{
        type:Date
    }
});

parentCategorySchema.pre('save', function(next){
    const currentDate = new Date();
    this.created_at = currentDate;

    next();
});


parentCategorySchema.pre('updateOne', function(next){
    const currentDate = new Date();
    this.updated_at = currentDate;

    next();
});

parentCategorySchema.pre('findByIdAndUpdate', function(next){
    const currentDate = new Date();
    this.updated_at = currentDate;

    next();
});

const ParentCategory = mongoose.model('parent_categories', parentCategorySchema);

module.exports = ParentCategory;