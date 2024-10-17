import { CategoryListService } from "../service/ProductService.js";

export const CategoryList = async (req, res) => {
  let reault = await CategoryListService();
  return res.json(reault);
};
