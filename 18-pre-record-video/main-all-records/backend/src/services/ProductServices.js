const mongoose = require("mongoose");
const ProductModel = require("../models/ProductModel.js");
const ProductDetailModel = require("../models/ProductDetailModel.js");
const ReviewModel = require("../models/ReviewModel.js");
const BrandModel = require("../models/BrandModel.js");
const CategoryModel = require("../models/CategoryModel.js");
const ProductSliderModel = require("../models/ProductSliderModel.js");

const ObjectId = mongoose.Types.ObjectId;

//Products list items .(3=> Bra + Cate + Sli)...................................
//BrandListService....
const BrandListService = async () => {
  try {
    let data = await BrandModel.find();
    return { status: "success", data: data };
  } catch (error) {
    return { status: "success", message: error.toString() };
  }
};

//CategoryListService...(3=> Bra + Cate + Sli)
const CategoryListService = async () => {
  try {
    let data = await CategoryModel.find();
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};

//SliderListService...(3=> Bra + Cate + Sli)
const SliderListService = async () => {
  try {
    let data = await ProductSliderModel.find();
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};

//ListByBrandService...(2=> listCategory + listBrand )..
const ListByBrandService = async (req) => {
  try {
    let BrandID = new ObjectId(req.params.BrandID); //api path BrandID....(create path => postman)....

    //mongoose aggregate .............
    let MetchStage = { $match: { brandID: BrandID } }; //api path BrandID ---compass=> porducts => brandID

    let JoinWithBrandStage = {
      $lookup: {
        //..(compass => proudct).....
        from: "brands", //compass => bands collection.......
        localField: "brandID", //compass => local field => brandID...
        foreignField: "_id", //compass => barnds => (_id)....
        as: "brand", //create object{ brands:}....
      },
    };

    let JoinWithCategoryStage = {
      $lookup: {
        //..(compass => proudct).....
        from: "categories", //compass => categories collection.......
        localField: "categoryID", //compass => local field => categoryID
        foreignField: "_id", //compass => categories => (_id)
        as: "category", //create object{ categories:}
      },
    };

    let UnwindBrandStage = { $unwind: "$brand" }; //[ ] delete => stay {}
    let UnwindCategoryStage = { $unwind: "$category" }; //[ ] delete => stay {}

    //Product title / id delete => stay data finding => postman
    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MetchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};

//ListByCategoryService...(2=> listCategory + listBrand +)..
const ListByCategoryService = async (req) => {
  try {
    console.log(typeof req.params.CategoryID);
    let CategoryID = new ObjectId(req.params.CategoryID);
    let MetchStage = { $match: { categoryID: CategoryID } };
    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let UnwindWithListByBrand = { $unwind: "$brand" };
    let UnwindWithListByCategory = { $unwind: "$category" };

    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MetchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindWithListByBrand,
      UnwindWithListByCategory,
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};

//ListByRemarkService...( " remark " ==> new ObjectId is not include ).....................................
const ListByRemarkService = async (req) => {
  //new ObjectId is not used Remark.
  try {
    let Remark = req.params.Remark; //api path BrandID....(create path => postman)....
    //mongoose aggregate .............
    let MetchStage = { $match: { remark: Remark } }; //api path BrandID ---compass=> porducts => brandID

    let JoinWithBrandStage = {
      $lookup: {
        //..(compass => proudct).....
        from: "brands", //compass => bands collection.......
        localField: "brandID", //compass => local field => brandID...
        foreignField: "_id", //compass => barnds => (_id)....
        as: "brand", //create object{ brands:}....
      },
    };

    let JoinWithCategoryStage = {
      $lookup: {
        //..(compass => proudct).....
        from: "categories", //compass => categories collection.......
        localField: "categoryID", //compass => local field => categoryID
        foreignField: "_id", //compass => categories => (_id)
        as: "category", //create object{ categories:}
      },
    };

    let UnwindBrandStage = { $unwind: "$brand" }; //[ ] delete => stay {}
    let UnwindCategoryStage = { $unwind: "$category" }; //[ ] delete => stay {}

    //Product title / id delete => stay data finding => postman
    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MetchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};

///ListBySimilarService... let limitStage = { $limit: 10 };.........................................
const ListBySimilarService = async (req) => {
  try {
    let CategoryID = new ObjectId(req.params.CategoryID);
    let MetchStage = { $match: { categoryID: CategoryID } };
    let limitStage = { $limit: 4 };
    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let UnwindWithListByBrand = { $unwind: "$brand" };
    let UnwindWithListByCategory = { $unwind: "$category" };

    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MetchStage,
      limitStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindWithListByBrand,
      UnwindWithListByCategory,
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};

//DetailsService......................................
const DetailsService = async (req) => {
  try {
    let ProductID = new ObjectId(req.params.ProductID);
    let MatchStage = { $match: { _id: ProductID } };

    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let JoinWithDetailsStage = {
      $lookup: {
        from: "productdetails",
        localField: "_id",
        foreignField: "productID",
        as: "details",
      },
    };

    let UnwindBrandStage = { $unwind: "$brand" };
    let UnwindCategoryStage = { $unwind: "$category" };
    let UnwindDetailsStage = { $unwind: "$details" };

    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      JoinWithDetailsStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      UnwindDetailsStage,
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

//ListByKeywordService....
const ListByKeywordService = async (req) => {
  try {
    let SearchRegex = { $regex: req.params.Keyword, $options: "i" };
    let SearchParams = [{ title: SearchRegex }, { shortDes: SearchRegex }];
    let SearchQuery = { $or: SearchParams };

    let MatchStage = { $match: SearchQuery };

    let JoinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand",
      },
    };
    let JoinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let UnwindBrandStage = { $unwind: "$brand" };
    let UnwindCategoryStage = { $unwind: "$category" };
    let ProjectionStage = {
      $project: {
        "brand._id": 0,
        "category._id": 0,
        categoryID: 0,
        brandID: 0,
      },
    };

    let data = await ProductModel.aggregate([
      MatchStage,
      JoinWithBrandStage,
      JoinWithCategoryStage,
      UnwindBrandStage,
      UnwindCategoryStage,
      ProjectionStage,
    ]);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};

//ReviewListService..
const ProductReviewLitService = async (req) => {
  try {
    let ProductID = new ObjectId(req.params.ProductID);

    let MatchStage = { $match: { productID: ProductID } };
    let JoinprofielState = {
      $lookup: {
        from: "profiles",
        localField: "userID",
        foreignField: "userID",
        as: "profile",
      },
    };

    let UnwindProfileState = { $unwind: "$profile" };
    let ProjectionStage = {
      $project: { "profile.cus_name": 1, des: 1, rating: 1, _id: 1 },
    };

    let data = await ReviewModel.aggregate([
      MatchStage,
      JoinprofielState,
      UnwindProfileState,
      ProjectionStage,
    ]);

    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error }.toString();
  }
};

//CreateReviewService..............................................................
const CreateReviewService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let reqBody = req.body;

    let data = await ReviewModel.create({
      productID: reqBody.productID,
      userID: user_id,
      des: reqBody.des,
      rating: reqBody.rating,
    });
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e.toString() };
  }
};

module.exports = {
  BrandListService,
  CategoryListService,
  SliderListService,
  ListByBrandService,
  ListByCategoryService,
  ListByKeywordService,
  ListByRemarkService,
  ListBySimilarService,
  DetailsService,
  ProductReviewLitService,
  CreateReviewService,
};
