import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(title:string , value:number, type:string ): Transaction {
    var validType: 'income' | 'outcome';

    if(type === 'income' || type === 'outcome'){
        validType = type;
    }else{
      throw new Error("Invalid type");
    }

    if(type ==='outcome'){
      const balance = this.transactionsRepository.getBalance();
      if(value > balance.total){
        throw new Error("Balance error");
      }
    }


    return this.transactionsRepository.create({title,value,type});
  }
}

export default CreateTransactionService;
