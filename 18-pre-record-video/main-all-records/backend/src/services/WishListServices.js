const WishModel = require("../models/WishModel");
const mongoose = require("mongoose");
const ObjectID = mongoose.Types.ObjectId;

//WishListService....................................
const WishListService = async (req) => {
  try {
    let user_id = new ObjectID(req.headers.user_id);
    let matchStage = { $match: { userID: user_id } };

    let joniStagePorduct = {
      $lookup: {
        from: "products",
        localField: "productID",
        foreignField: "_id",
        as: "products",
      },
    };

    let joinStageBrand = {
      $lookup: {
        from: "brands",
        localField: "products.brandID",
        foreignField: "_id",
        as: "brands",
      },
    };
    let joinStageCategory = {
      $lookup: {
        from: "categories",
        localField: "products.categoryID",
        foreignField: "_id",
        as: "categories",
      },
    };

    let unwindProductStage = { $unwind: "$products" };
    let unwindBrandStage = { $unwind: "$brands" };
    let unwindCategoryStage = { $unwind: "$categories" };

    let projectionStage = {
      $project: {
        _id: 0,
        userID: 0,
        "products._id": 0,
        "products.brandID": 0,
        "products.categoryID": 0,
        "brands._id": 0,
        "categories._id": 0,
      },
    };

    let data = await WishModel.aggregate([
      matchStage,
      joniStagePorduct,
      unwindProductStage,
      joinStageBrand,
      unwindBrandStage,
      joinStageCategory,
      unwindCategoryStage,
      projectionStage,
    ]);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", message: "Something went wrong!" };
  }
};

//CreateWishListService...........................
const SaveWishListService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let reqBody = req.body;
    reqBody.userID = user_id;

    await WishModel.updateOne(reqBody, { $set: reqBody }, { upsert: true });
    return { status: "success", message: "Wish List Save Success" };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong !" };
  }
};

//RemoveWishListService..................................
const RemoveWishListService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let reqBody = req.body;
    reqBody.userID = user_id;

    await WishModel.deleteOne(reqBody);
    return { status: "success", message: "Wish List Remove Successfully." };
  } catch (error) {
    return { status: "fail", message: "Something Went Wrong!" };
  }
};

module.exports = {
  WishListService,
  SaveWishListService,
  RemoveWishListService,
};
