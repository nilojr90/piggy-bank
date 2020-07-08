import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
import ListAllTransactionsService from '../services/ListAllTransactionsService';
import GetBalanceService from '../services/GetBalanceService'
import Transaction from '../models/Transaction';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

const createTransactionService = new CreateTransactionService(transactionsRepository)

const listAllTransactionsService = new ListAllTransactionsService(transactionsRepository)

const getBalanceService = new GetBalanceService(transactionsRepository)

transactionRouter.get('/', (request, response) => {
  try {
    return response.json({
      transactions:listAllTransactionsService.execute(),
      balance:getBalanceService.execute()
    });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  const {title, value, type} = request.body;

  try {
    const transaction:Transaction = createTransactionService.execute(title,value,type);

    return response.json(transaction);

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
