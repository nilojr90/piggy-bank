import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public getAll(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
  }

  public create({title,value,type}:Omit<Transaction,'id'>): Transaction {
    const newTransaction = new Transaction({title,value,type});
    this.transactions.push(newTransaction);
    return newTransaction;
  }
}

export default TransactionsRepository;
