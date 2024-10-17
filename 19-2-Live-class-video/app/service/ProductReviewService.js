import ReviewModel from "../model/reviewsModel.js";

//Create user Service.....
export const CreateReviewService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let { productID } = req.body;

    let postJSON = {
      productID: productID,
      userID: user_id,
    };

    await ReviewModel.updateOne(postJSON, { $set: postJSON }, { upsert: true });

    return { status: "success", message: "Create Successfully" };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};

//UpdateReviewService...........................................
export const UpdateReviewService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let { productID } = req.body;

    let postJSON = {
      productID: productID,
      userID: user_id,
    };

    await ReviewModel.updateOne(postJSON, { $set: postJSON }, { upsert: true });

    return { status: "success", message: "Create Successfully" };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};
