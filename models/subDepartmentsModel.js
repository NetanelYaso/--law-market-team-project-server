const mongoose = require("mongoose");
const schema = mongoose.Schema;

const subDepartmentsSchema = schema({
  name:{type:String, required:true},
  description:{type:String, required:true},
  }, { timestamps: true });
  const subDepartmentModel = mongoose.model("subDepartment", subDepartmentsSchema);

module.exports = subDepartmentModel