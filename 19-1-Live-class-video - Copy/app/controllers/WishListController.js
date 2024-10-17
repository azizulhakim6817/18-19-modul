export const CreateWish = async (req, res) => {
  try {
    return res.json({ status: "success" });
  } catch (error) {
    return res.json({ status: "fail", message: error.toString() });
  }
};
export const ReadWishList = async (req, res) => {
  try {
    return res.json({ status: "success" });
  } catch (error) {
    return res.json({ status: "fail", message: error.toString() });
  }
};
export const RemoveWish = async (req, res) => {
  try {
    return res.json({ status: "success" });
  } catch (error) {
    return res.json({ status: "fail", message: error.toString() });
  }
};
