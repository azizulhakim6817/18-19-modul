import express from "express";
const router = express.Router();

import * as UsersController from "../app/controllers/UsersController.js";
import * as BrandController from "../app/controllers/BrandController.js";
import * as categoriesController from "../app/controllers/CategoryController.js";
import * as ProductController from "../app/controllers/ProductController.js";
import * as CartListController from "../app/controllers/CartListController.js";
import * as WishListController from "../app/controllers/WishListController.js";
import * as InvoiceController from "../app/controllers/InvoiceController.js";

import AuthMiddleware from "../app/middleware/AuthMiddleware.js";

//User-4.......................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
router.post("/Login", UsersController.Login);
router.post("/VerifyLogin", UsersController.VerifyLogin);
router.post(
  "/CreateUserProfile",
  AuthMiddleware,
  UsersController.CreateUserProfile
);
router.get(
  "/UpdateUserProfile",
  AuthMiddleware,
  UsersController.UpdateUserProfile
);
router.get("/ReadUserProfile", AuthMiddleware, UsersController.ReadUserProfile);

//Brands list -4....................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
router.get("/BrandList", BrandController.BrandList);

//Category list -4.............................>>>>>>>>>>>>>>>>>>>>>>>>>>>.
router.get("/CategoryList", categoriesController.CategoryList);

//Cart.count-4......................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
router.post("/CreatCart", CartListController.CreatCart);
router.get("/ReadCartList", CartListController.ReadCartList);
router.post("/UpdateCart", CartListController.UpdateCart);
router.post("/RemoveCart", CartListController.RemoveCart);

//Wish-list-3...........................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
router.post("/CreateWish", WishListController.CreateWish);
router.get("/ReadWishList", WishListController.ReadWishList);
router.post("/RemoveWish", WishListController.RemoveWish);

// Review
router.get("/CreateProductReview", ProductController.CreateProductReview);

//Products-List all 8..................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
router.get("/ProductLitBySlider", ProductController.ProductLitBySlider);
router.get("/ProductLitByBrand/:BrandID", ProductController.ProductLitByBrand);
router.get(
  "/ProductLitByCategory/:CategoryID",
  ProductController.ProductLitByCategory
);
router.get("/ProductLitByRemark/:Remark", ProductController.ProductLitByRemark);
router.get("/ProductDetailsID/:ProductID", ProductController.ProductDetailsID);

router.get(
  "/ProductLitByKeyword/:keyword",
  ProductController.ProductLitByKeyword
);
router.get(
  "/ProducReviewListByID/:ProductID",
  ProductController.ProducReviewListByID
);

//invoices....................????????????????????????????????????????????
router.post("/CreateInvoice", InvoiceController.CreateInvoice);
router.get("/ReadInvoiceList", InvoiceController.ReadInvoiceList);
router.get("/ReadIvoiceDetails", InvoiceController.ReadIvoiceDetails);

export default router;
