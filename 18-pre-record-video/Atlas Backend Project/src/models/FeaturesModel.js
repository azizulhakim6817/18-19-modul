const dataSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
  },
  { timestamp: true, versionKey: false }
);

const FeaturesModel = mongoose.model("features", dataSchema);

module.exports = FeaturesModel;
