const jwt = require("jsonwebtoken");

exports.EncodeToken = (email, user_id) => {
  let KEY = "124-ABC-XAaaay";
  let EXPIRE = "24h";
  let PAYLOAD = { email: email, user_id: user_id };
  return jwt.sign(PAYLOAD, KEY, { expiresIn: EXPIRE });
};

exports.DecodeToken = (token) => {
  try {
    let KEY = "124-ABC-XAaaay"; //EncodeToken => KEY access ...
    return jwt.verify(token, KEY);
  } catch (error) {
    return null;
  }
};
