const express = require("express");
const ProductController = require("../controllers/ProductController.js");
const UserController = require("../controllers/UserController.js");
const WishListController = require("../controllers/WishListController.js");
const CartListController = require("../controllers/CartListController.js");
const InvoiceController = require("../controllers/InvoiceController.js");

const AuthVerification = require("../middleware/AuthVerification.js");

const router = express.Router();

//users Loign .................................
router.get("/UserOTP/:email", UserController.UserOTP);
router.get("/VerifyLogin/:email/:otp", UserController.VerifyLogin);
router.get("/UserLogout", AuthVerification, UserController.UserLogout);
//profiel create / update / delete..................................................
router.post("/CreateProfile", AuthVerification, UserController.CreateProfile);
router.post("/UpdataProfile", AuthVerification, UserController.UpdataProfile);
router.post("/ReadProfile", AuthVerification, UserController.ReadProfile);

//product related routes....................
router.get("/ProductBrandList", ProductController.ProductBrandList);
router.get("/ProductCategoryList", ProductController.ProductCategoryList);
router.get("/ProductSliderList", ProductController.ProductSliderList);

router.get(
  "/ProductListByBrand/:BrandID",
  ProductController.ProductListByBrand
);

router.get(
  "/ProductListByCategory/:CategoryID",
  ProductController.ProductListByCategory
);

router.get(
  "/ProductListByRemark/:Remark",
  ProductController.ProductListByRemark
);

router.get(
  "/ProductListBySimilar/:CategoryID",
  ProductController.ProductListBySimilar
);

router.get("/ProductDetails/:ProductID", ProductController.ProductDetails);

router.get(
  "/ProductListByKeyword/:Keyword",
  ProductController.ProductListByKeyword
);

router.get(
  "/ProductReviewList/:ProductID",
  ProductController.ProductReviewList
);

//Wish.......................................................
router.get("/WishList", AuthVerification, WishListController.WishList);
router.post("/SaveWishList", AuthVerification, WishListController.SaveWishList);
router.post(
  "/RemoveWishList",
  AuthVerification,
  WishListController.RemoveWishList
);

//Cart List ...........................................................
router.post("/SaveCartList", AuthVerification, CartListController.SaveCartList);
router.post(
  "/RemoveCartList",
  AuthVerification,
  CartListController.RemoveCartList
);
router.get("/CartList", AuthVerification, CartListController.CartList);
router.post(
  "/UpdateCartList/:CartID",
  AuthVerification,
  CartListController.UpdateCartList
);

// Invoice & Payment ...................................................
router.post(
  "/CreateInvoice",
  AuthVerification,
  InvoiceController.CreateInvoice
);

module.exports = router;
