import mongoose from "mongoose";

const DataShema = new mongoose.Schema(
  {
    categoryName: { type: String, required: true, unique: true },
    categoryImg: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CategoryModel = mongoose.model("categories", DataShema);
export default CategoryModel;
