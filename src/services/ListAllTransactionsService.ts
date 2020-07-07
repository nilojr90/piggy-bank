import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class ListAllTransactionsService{
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): Transaction[]{
    return this.transactionsRepository.getAll();
  }

}

export default ListAllTransactionsService;
