const mongoose = require("mongoose");
const schema = mongoose.Schema;

const usersSchema = schema(
  {
    name: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    password: { type: String, required: true },
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
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "order",
      },
    ],
    lastSeen: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
const userModel = mongoose.model("user", usersSchema);

module.exports = userModel;
