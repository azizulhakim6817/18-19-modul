import {
  CreateReviewService,
  UpdateReviewService,
} from "../service/ProductReviewService.js";
import {
  CreateUserProfileSevice,
  LoginSevice,
  ReadUserProfileSevice,
  UpdateUserProfileSevice,
  VerifyLoginSevice,
} from "../service/UserService.js";

//loign .....................................................
export const Login = async (req, res) => {
  let result = await LoginSevice(req);
  return res.json(result);
};

//Verify Login ....................................................
export const VerifyLogin = async (req, res) => {
  let result = await VerifyLoginSevice(req);
  return res.json(result);
};

//CreateUserProfile ....................................................
export const CreateUserProfile = async (req, res) => {
  let result = await CreateUserProfileSevice(req);
  return res.json(result);
};
//CreateUserProfile ....................................................
export const UpdateUserProfile = async (req, res) => {
  let result = await UpdateUserProfileSevice(req);
  return res.json(result);
};

//ReadUserProfile ....................................................
export const ReadUserProfile = async (req, res) => {
  let result = await ReadUserProfileSevice(req);
  return res.json(result);
};

//Create user Review Product ....................................................
export const createUserReviewProduct = async (req, res) => {
  let result = await CreateReviewService(req);
  return res.json(result);
};

//update user Review Product ....................................................
export const updateUserReviewProduct = async (req, res) => {
  let result = await UpdateReviewService(req);
  return res.json(result);
};
