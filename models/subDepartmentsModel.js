const mongoose = require("mongoose");
const schema = mongoose.Schema;

const subDepartmentsSchema = schema({
  name:{type:String, required:true},
  discription:[{type:String, required:true}],
  }, { timestamps: true });
  const subDepartmentModel = mongoose.model("subDepartment", subDepartmentsSchema);

  module.exports = subDepartmentModel