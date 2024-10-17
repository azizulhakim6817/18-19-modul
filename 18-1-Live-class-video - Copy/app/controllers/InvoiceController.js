export const CreateProductReview = async (req, res) => {
  try {
    return res.json({ status: "success" });
  } catch (error) {
    return res.json({ status: "fail", message: error.toString() });
  }
};

export const ReadInvoiceList = async (req, res) => {
  try {
    return res.json({ status: "success" });
  } catch (error) {
    return res.json({ status: "fail", message: error.toString() });
  }
};

export const ReadIvoiceDetails = async (req, res) => {
  try {
    return res.json({ status: "success" });
  } catch (error) {
    return res.json({ status: "fail", message: error.toString() });
  }
};
