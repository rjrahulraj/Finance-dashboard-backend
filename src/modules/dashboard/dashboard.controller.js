import {
  getSummary,
  getCategoryBreakdown,
  getMonthlyTrends,
  getRecentTransactions,
} from "./dashboard.service.js";

export const summary = async (req, res, next) => {
  try {
    const data = await getSummary(req.user._id);
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const categoryBreakdown = async (req, res, next) => {
  try {
    const data = await getCategoryBreakdown(req.user._id);
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const monthlyTrends = async (req, res, next) => {
  try {
    const data = await getMonthlyTrends(req.user._id);
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const recent = async (req, res, next) => {
  try {
    const data = await getRecentTransactions(req.user._id);
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};