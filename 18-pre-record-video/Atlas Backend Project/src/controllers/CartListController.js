const {
  SaveCartListService,
  RemoveCartListService,
  CartListServices,
  UpdateCartListService,
} = require("../services/CartListServices");

exports.SaveCartList = async (req, res) => {
  let result = await SaveCartListService(req);
  return res.status(200).json(result);
};

exports.RemoveCartList = async (req, res) => {
  let result = await RemoveCartListService(req);
  return res.status(200).json(result);
};

exports.UpdateCartList = async (req, res) => {
  let result = await UpdateCartListService(req);
  return res.status(200).json(result);
};

exports.CartList = async (req, res) => {
  let result = await CartListServices(req);
  return res.status(200).json(result);
};
