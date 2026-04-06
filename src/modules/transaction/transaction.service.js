import Transaction from "./transaction.model.js";

export const createTransaction = async (userId, data) => {
  const transaction = await Transaction.create({
    ...data,
    user: userId,
  });
  return transaction;
};

export const getTransactions = async (userId, query) => {
  const filter = { user: userId };

  if (query.type) filter.type = query.type;
  if (query.category) filter.category = query.category;

  if (query.startDate || query.endDate) {
    filter.date = {};
    if (query.startDate) filter.date.$gte = new Date(query.startDate);
    if (query.endDate) filter.date.$lte = new Date(query.endDate);
  }

  const transactions = await Transaction.find(filter).sort({ date: -1 });

  return transactions;
};

export const getTransactionById = async (userId, id) => {
  const transaction = await Transaction.findOne({
    _id: id,
    user: userId,
  });

  if (!transaction) {
    const error = new Error("Transaction not found");
    error.statusCode = 404;
    throw error;
  }

  return transaction;
};

export const updateTransaction = async (userId, id, data) => {
  const transaction = await Transaction.findOneAndUpdate(
    { _id: id, user: userId },
    data,
    { new: true }
  );

  if (!transaction) {
    const error = new Error("Transaction not found");
    error.statusCode = 404;
    throw error;
  }

  return transaction;
};

export const deleteTransaction = async (userId, id) => {
  const transaction = await Transaction.findOneAndDelete({
    _id: id,
    user: userId,
  });

  if (!transaction) {
    const error = new Error("Transaction not found");
    error.statusCode = 404;
    throw error;
  }

  return transaction;
};