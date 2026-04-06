export const validateTransaction = (req, res, next) => {
  const { amount, type, category, date } = req.body;

  if (!amount || !type || !category || !date) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  if (!["income", "expense"].includes(type)) {
    return res.status(400).json({
      success: false,
      message: "Invalid transaction type",
    });
  }

  next();
};