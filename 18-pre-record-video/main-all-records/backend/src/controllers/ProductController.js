const {
  CategoryListService,
  SliderListService,
  BrandListService,
  ListByBrandService,
  ListByCategoryService,
  ListByRemarkService,
  ListBySimilarService,
  DetailsService,
  ListByKeywordService,
  ProductReviewLitService,
  CreateReviewService,
} = require("../services/ProductServices.js");

//Products list items.................................
exports.ProductBrandList = async (req, res) => {
  let result = await BrandListService();
  res.status(200).json(result);
};

exports.ProductCategoryList = async (req, res) => {
  let result = await CategoryListService();
  res.status(200).json(result);
};

exports.ProductSliderList = async (req, res) => {
  let result = await SliderListService();
  res.status(200).json(result);
};

exports.ProductListByBrand = async (req, res) => {
  let result = await ListByBrandService(req);
  res.status(200).json(result);
};

exports.ProductListByCategory = async (req, res) => {
  let result = await ListByCategoryService(req);
  return res.status(200).json(result);
};
exports.ProductListByRemark = async (req, res) => {
  let result = await ListByRemarkService(req);
  return res.status(200).json(result);
};

exports.ProductListBySimilar = async (req, res) => {
  let result = await ListBySimilarService(req);
  return res.status(200).json(result);
};

exports.ProductDetails = async (req, res) => {
  let result = await DetailsService(req);
  return res.status(200).json(result);
};

exports.ProductListByKeyword = async (req, res) => {
  let result = await ListByKeywordService(req);
  return res.status(200).json(result);
};

exports.ProductReviewList = async (req, res) => {
  let result = await ProductReviewLitService(req);
  return res.status(200).json(result);
};

exports.CreateReview = async (req, res) => {
  let result = await CreateReviewService(req);
  return res.status(200).json(result);
};
