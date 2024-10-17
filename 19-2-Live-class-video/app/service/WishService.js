import mongoose from "mongoose";
import wishModel from "../model/wishesModel.js";
const ObjectId = mongoose.Types.ObjectId;

//CreateWishService.....
export const CreateWishService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let { productID } = req.body;

    let postJSON = {
      productID: productID,
      userID: user_id,
    };

    await wishModel.updateOne(postJSON, { $set: postJSON }, { upsert: true });

    return { status: "success", message: "Create Successfully" };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

//ReadWishListService............
export const ReadWishListService = async (req) => {
  try {
    let user_id = new ObjectId(req.headers.user_id);
    let matchStage = { $match: { userID: user_id } };
    let JoinStageProduct = {
      $lookup: {
        from: "products",
        localField: "productID",
        foreignField: "_id",
        as: "product",
      },
    };

    let data = await wishModel.aggregate([matchStage, JoinStageProduct]);

    return { status: "success", message: "Create successcully", data: data };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

//RemoveWishService...............
export const RemoveWishService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let { productID } = req.body;

    let postJSON = {
      productID: productID,
      userID: user_id,
    };

    await wishModel.deleteOne(postJSON);

    return { status: "success", message: "Create Successfully" };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};
