const mongoose = require("mongoose");
const schema = mongoose.Schema;

const lawyersSchema = schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    responseTime: { type: String, required: true },
    workTime: { type: String, required: true },
    experience: { type: String, required: true },
    avatar: {
      public_id: {
        type: String,
        default: "team_project_lawyers/gxi78yqf4eclrsncct3z",
      },
      url: {
        type: String,
        default:
          "https://res.cloudinary.com/dtcgejl11/image/upload/v1673277784/team_project_lawyers/gxi78yqf4eclrsncct3z.webp",
      },
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "review",
      },
    ],
    departments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: "department",
      },
    ],
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "order",
      },
    ],
  },
  { timestamps: true }
);
const lawyerModel = mongoose.model("lawyer", lawyersSchema);

module.exports = lawyerModel;
