import {
  createTransaction,
  getTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
} from "./transaction.service.js";

export const create = async (req, res, next) => {
  try {
    const transaction = await createTransaction(req.user._id, req.body);
    res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    next(error);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const transactions = await getTransactions(req.user._id, req.query);
    res.status(200).json({
      success: true,
      data: transactions,
    });
  } catch (error) {
    next(error);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const transaction = await getTransactionById(
      req.user._id,
      req.params.id
    );
    res.status(200).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const transaction = await updateTransaction(
      req.user._id,
      req.params.id,
      req.body
    );
    res.status(200).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    next(error);
  }
};

export const remove = async (req, res, next) => {
  try {
    await deleteTransaction(req.user._id, req.params.id);
    res.status(200).json({
      success: true,
      message: "Transaction deleted",
    });
  } catch (error) {
    next(error);
  }
};