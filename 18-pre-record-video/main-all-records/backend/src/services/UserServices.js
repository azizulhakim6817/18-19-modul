const EmailSend = require("../utility/EmailHelper");
const UserModel = require("../models/UserModel");
const { EncodeToken } = require("../utility/TokenHelper");
const ProfileModel = require("../models/ProfielModel");

///UserOTPService.....................................
const UserOTPService = async (req) => {
  try {
    let email = req.params.email;
    let code = Math.floor(100000 + Math.random() * 900000);

    let EmailText = `Your Verification Code is= ${code}`;
    let EmailSubject = "Email Verification";

    await EmailSend(email, EmailText, EmailSubject);

    await UserModel.updateOne(
      { email: email },
      { $set: { otp: code } },
      { upsert: true }
    );

    return { status: "success", message: "6 Digit OTP has been send" };
  } catch (e) {
    return { status: "fail", message: e };
  }
};

//VerifyOTPSevice.......chatGTP...........................
const VerifyOTPSevice = async (req) => {
  try {
    const email = req.params.email;
    const otp = req.params.otp;

    // Find user with email and otp
    const user = await UserModel.findOne({ email: email, otp: otp }).select(
      "_id"
    );

    if (user) {
      // User Token Create
      const token = EncodeToken(email, user._id.toString());

      // OTP Code Update To 0
      await UserModel.updateOne({ email: email }, { $set: { otp: "0" } });

      return { status: "success", message: "Valid OTP", token: token };
    } else {
      return { status: "fail", message: "Invalid OTP" };
    }
  } catch (error) {
    return { status: "fail", message: error };
  }
};

//CreateProfileService........UpdataProfileService...........................
const SaveProfileService = async (req, res) => {
  try {
    let user_id = req.headers.user_id;
    let reqBody = req.body;
    reqBody.userID = user_id;

    await ProfileModel.updateOne(
      { userID: user_id },
      { $set: reqBody },
      { upsert: true }
    );

    return { status: "success", message: "Profile Save Success" }; // Consider using res.json
  } catch (e) {
    console.error("Error saving profile:", e); // Log the error for debugging
    return { status: "fail", message: "Something Went Wrong" }; // Consider using res.json
  }
};

const ReadProfileService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let result = await ProfileModel.find({ userID: user_id });
    return { status: "success", data: result };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong" };
  }
};

module.exports = {
  UserOTPService,
  VerifyOTPSevice,
  SaveProfileService,
  ReadProfileService,
};
