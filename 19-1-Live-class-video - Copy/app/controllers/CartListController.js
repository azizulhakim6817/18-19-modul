export const CreatCart = async (req, res) => {
  try {
    return res.json({ status: "success" });
  } catch (error) {
    return res.json({ status: "fail", message: error.toString() });
  }
};

export const ReadCartList = async (req, res) => {
  try {
    return res.json({ status: "success" });
  } catch (error) {
    return res.json({ status: "fail", message: error.toString() });
  }
};

export const UpdateCart = async (req, res) => {
  try {
    return res.json({ status: "success" });
  } catch (error) {
    return res.json({ status: "fail", message: error.toString() });
  }
};

export const RemoveCart = async (req, res) => {
  try {
    return res.json({ status: "success" });
  } catch (error) {
    return res.json({ status: "fail", message: error.toString() });
  }
};
