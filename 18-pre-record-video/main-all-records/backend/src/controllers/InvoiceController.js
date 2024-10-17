const {
  CreateInvoiceService,
  PaymentSuccessService,
  PaymentFailService,
  PaymentCancelService,
  PaymentIPNService,
  InvoiceListService,
  InvoiceProductListService,
} = require("../services/InvoiceServices");

exports.CreateInvoice = async (req, res) => {
  let resutl = await CreateInvoiceService(req);
  return res.status(200).json(resutl);
};

//PaymentSuccess...............................
exports.PaymentSuccess = async (req, res) => {
  let resutl = await PaymentSuccessService(req);
  return res.redirect("my.com/orders");
};

//PaymentFail...............................
exports.PaymentFail = async (req, res) => {
  let resutl = await PaymentFailService(req);
  return res.redirect("/orders");
};

//PaymentCancel...............................
exports.PaymentCancel = async (req, res) => {
  let resutl = await PaymentCancelService(req);
  return res.redirect("/orders");
};

//PaymentCancel...............................
exports.PaymentIPN = async (req, res) => {
  let result = await PaymentIPNService(req);
  return res.status(200).json(result);
};

//InvoiceList.........................................
exports.InvoiceList = async (req, res) => {
  let result = await InvoiceListService(req);
  return res.status(200).json(result);
};

exports.InvoiceProductList = async (req, res) => {
  let result = await InvoiceProductListService(req);
  return res.status(200).json(result);
};
