import express from "express";
const router = express.Router();

import * as UsersController from "../app/controllers/UsersController.js";
import * as BarndsModel from "../app/controllers/barndsModel.js";
import * as categoriesModel from "../app/controllers/categoriesModel.js";
import * as CartListController from "../app/controllers/CartListController.js";
import * as WishListController from "../app/controllers/WishListController.js";
import * as ProductController from "../app/controllers/ProductController.js";
import * as InvoiceController from "../app/controllers/InvoiceController.js";

//User-4.......................
router.post("/Login", UsersController.Login);
router.post("/VerifyLogin", UsersController.VerifyLogin);
router.post("/CreateUserProfile", UsersController.CreateUserProfile);
router.post("/UpdateUserProfile", UsersController.UpdateUserProfile);

//Brands list -4.............................................................
router.post("/BrandList", BarndsModel.BrandList);

//Category list -4.............................................................
router.post("/categoriesModel", categoriesModel.categoriesModel);

//Cart.count-4.............................................................
router.post("/CreatCart", CartListController.CreatCart);
router.post("/ReadCartList", CartListController.ReadCartList);
router.post("/UpdateCart", CartListController.UpdateCart);
router.post("/RemoveCart", CartListController.RemoveCart);

//Wish-list-3.............................................................
router.post("/CreateWish", WishListController.CreateWish);
router.post("/ReadWishList", WishListController.ReadWishList);
router.post("/RemoveWish", WishListController.RemoveWish);

//Products-8.............................................................
router.post("/ProductLitBySlider", ProductController.ProductLitBySlider);
router.post("/ProductLitByCategory", ProductController.ProductLitByCategory);
router.post("/ProductLitByRemark", ProductController.ProductLitByRemark);
router.post("/ProductLitByBrand", ProductController.ProductLitByBrand);
router.post("/ProductDetailsID", ProductController.ProductDetailsID);
router.post("/ProductLitByKeyword", ProductController.ProductLitByKeyword);
router.post("/ProducReviewListByID", ProductController.ProducReviewListByID);
router.post("/CreateProductReview", ProductController.CreateProductReview);

//invoices.................................................................
router.post("/CreateProductReview", InvoiceController.CreateIvoice);
router.post("/ReadInvoiceList", InvoiceController.ReadInvoiceList);
router.post("/ReadIvoiceDetails", InvoiceController.ReadIvoiceDetails);

export default router;
