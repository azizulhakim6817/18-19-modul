const mongoose = require("mongoose");
const storeSchema = new mongoose.Schema(
  {
    store_id: { type: String, required: true },
    store_passwd: { type: String, required: true },
    currency: { type: String, required: true },
    success_url: { type: String, required: true },
    fail_url: { type: String, required: true },
    cancel_url: { type: String, required: true },
    ipn_url: { type: String, required: true },
    init_url: { type: String, required: true },
  },
  { timestamp: true, versionKey: false }
);

const PaymentSittingModel = mongoose.model("paymentSitting", storeSchema);

module.exports = PaymentSittingModel;
