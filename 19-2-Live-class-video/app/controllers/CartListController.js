import {
  CreatCartService,
  ReadCartListService,
  RemoveCartService,
  UpdateCartService,
} from "../service/CartService.js";

export const CreatCart = async (req, res) => {
  let result = await CreatCartService(req);
  return res.json(result);
};

export const ReadCartList = async (req, res) => {
  let result = await ReadCartListService(req);
  return res.json(result);
};

export const UpdateCart = async (req, res) => {
  let result = await UpdateCartService(req);
  return res.json(result);
};

export const RemoveCart = async (req, res) => {
  let result = await RemoveCartService(req);
  return res.json(result);
};
