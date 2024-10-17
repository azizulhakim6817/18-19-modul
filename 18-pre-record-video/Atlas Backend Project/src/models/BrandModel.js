const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    brandName: { type: String, unique: true, required: true },
    brandImg: { type: String, required: true },
  },
  { timestamp: true, versionKey: false }
);

const BrandModel = mongoose.model("brands", dataSchema);

module.exports = BrandModel;
