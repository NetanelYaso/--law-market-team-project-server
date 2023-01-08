const mongoose = require("mongoose");
const schema = mongoose.Schema;

const departmentsSchema = schema({
  name: { type: String, required: true },
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    ref: "subDepartment",}],
  active:{type:Boolean,required:true},
  coverImage:{
    public_id:{type:String, required:true}, 
    url:{type:String, required:true}, 
},
  lawyers: [{
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    ref: "lawyer",
  }],
}, { timestamps: true });
const departmentModel = mongoose.model("department", departmentsSchema);

module.exports = departmentModel