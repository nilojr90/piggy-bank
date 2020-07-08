import Transaction from '../models/Transaction';
import Balance from '../models/Balance';

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public getAll(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {

    const incomeSum = this.transactions.reduce((first,current)=>{
      if(current.type === first.type){
        first.value = first.value + current.value;
      }
      return first;

    },new Transaction({ title:'sum', value: 0 , type: 'income' }));

    const outcomeSum = this.transactions.reduce((first,current)=>{
      if(current.type === first.type){
        first.value = first.value + current.value;
      }
      return first;

    },new Transaction({ title:'sum', value: 0 , type: 'outcome' }));

    return new Balance({income:incomeSum.value, outcome:outcomeSum.value});
  }

  public create({title,value,type}:Omit<Transaction,'id'>): Transaction {
    const newTransaction = new Transaction({title,value,type});
    this.transactions.push(newTransaction);
    return newTransaction;
  }
}

export default TransactionsRepository;
