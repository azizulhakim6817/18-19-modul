//loign .....................................................
export const Login = async (req, res) => {
  try {
    return res.json({ status: "success", Message: "" });
  } catch (e) {
    return res.json({ status: "fail", Message: e.toString() });
  }
};

//Verify Login ....................................................
export const VerifyLogin = async (req, res) => {
  try {
    return res.json({ status: "success", Message: "" });
  } catch (e) {
    return res.json({ status: "fail", Message: e.toString() });
  }
};

//Create Users Profile ....................................................
export const CreateUserProfile = async (req, res) => {
  try {
    return res.json({ status: "success", Message: "" });
  } catch (e) {
    return res.json({ status: "fail", Message: e.toString() });
  }
};

//UpdateUserProfile ....................................................
export const UpdateUserProfile = async (req, res) => {
  try {
    return res.json({ status: "success", Message: "" });
  } catch (e) {
    return res.json({ status: "fail", Message: e.toString() });
  }
};

//UpdateUserProfile ....................................................
export const ReadUserProfile = async (req, res) => {
  try {
    return res.json({ status: "success", Message: "" });
  } catch (e) {
    return res.json({ status: "fail", Message: e.toString() });
  }
};
