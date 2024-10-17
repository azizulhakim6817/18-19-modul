import mongoose from "mongoose";

const DataShema = new mongoose.Schema(
  {
    barndName: { type: String, required: true, unique: true },
    barndImg: { type: String, required: true },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const BrandModel = mongoose.model("brands", DataShema);
export default BrandModel;
