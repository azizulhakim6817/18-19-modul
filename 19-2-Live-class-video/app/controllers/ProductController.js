import {
  DetailsService,
  ListByBrandService,
  ListByCategoryService,
  ListByKeywordService,
  ListByRemarkService,
  ReviewListService,
  SliderListService,
} from "../service/ProductService.js";

//ProductLitByBrand.contorller.js...............................
export const ProductLitByCategory = async (req, res) => {
  let result = await ListByCategoryService(req);
  return res.json(result);
};

export const ProductLitByBrand = async (req, res) => {
  let result = await ListByBrandService(req);
  return res.json(result);
};

export const ProductLitBySlider = async (req, res) => {
  let result = await SliderListService(req);
  return res.json(result);
};

export const ProductLitByRemark = async (req, res) => {
  let result = await ListByRemarkService(req);
  return res.json(result);
};

export const ProductDetailsID = async (req, res) => {
  let result = await DetailsService(req);
  return res.json(result);
};

export const ProductLitByKeyword = async (req, res) => {
  let result = await ListByKeywordService(req);
  return res.json(result);
};

export const ProducReviewListByID = async (req, res) => {
  let result = await ReviewListService(req);
  return res.json(result);
};
