const mongoose = require("mongoose");
const schema = mongoose.Schema;

const departmentsSchema = schema({
  name: { type: String, required: true },
  subDepartments: [{
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    ref: "subDepartment",}],
  active:{type:Boolean,required:true},
  coverImage:{
    public_id:{type:String, default: "team_project_lawyers/gxi78yqf4eclrsncct3z",}, 
    url:{type:String, 
      default:
        "https://res.cloudinary.com/dtcgejl11/image/upload/v1673277784/team_project_lawyers/gxi78yqf4eclrsncct3z.webp"}, 
},
  lawyers: [{ 
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    ref: "lawyer",
  }],
}, { timestamps: true });
const departmentModel = mongoose.model("department", departmentsSchema);

module.exports = departmentModel