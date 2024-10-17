import mongoose from "mongoose";

const DataShema = new mongoose.Schema(
  {
    porductID: { type: mongoose.Schema.Types.ObjectId, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, required: true },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const wishModel = mongoose.model("wishes", DataShema);
export default wishModel;
