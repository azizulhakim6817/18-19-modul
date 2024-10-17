const { DecodeToken } = require("../utility/TokenHelper");

module.exports = (req, res, next) => {
  let token = req.headers.token; //request user token
  if (!token) {
    token = req.cookies.token; // Defalt token from Cookie manage...
  }

  let decoded = DecodeToken(token); // Middleware token recieved =>
  //console.log(decoded);

  if (decoded === null) {
    return res.status(401).json({ status: "fail", message: "UnAuthorized" });
  } else {
    let email = decoded.email;
    let user_id = decoded.user_id;
    req.headers.email = email;
    req.headers.user_id = user_id;
    next();
  }
};
