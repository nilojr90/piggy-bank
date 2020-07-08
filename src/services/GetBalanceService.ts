import TransactionsRepository from '../repositories/TransactionsRepository';
import Balance from '../models/Balance';

class GetBalanceService{
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): Balance{
    return this.transactionsRepository.getBalance();
  }

}

export default GetBalanceService;
