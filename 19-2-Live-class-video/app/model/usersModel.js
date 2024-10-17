import mongoose from "mongoose";

const DataShema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    otp: { type: String, required: true },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const userModel = mongoose.model("users", DataShema);
export default userModel;
