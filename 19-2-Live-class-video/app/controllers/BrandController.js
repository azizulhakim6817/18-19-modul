import { BrandListService } from "../service/ProductService.js";

export const BrandList = async (req, res) => {
  let reault = await BrandListService();
  return res.json(reault);
};
