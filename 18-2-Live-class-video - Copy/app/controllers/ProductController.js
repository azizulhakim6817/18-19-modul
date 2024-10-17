import {
  DetailsService,
  ListByBrandService,
  ListByCategoryService,
  ListByRemarkService,
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

export const ProductLitByKeyword = async (req, res) => {};

export const ProducReviewListByID = async (req, res) => {};

export const CreateProductReview = async (req, res) => {};
