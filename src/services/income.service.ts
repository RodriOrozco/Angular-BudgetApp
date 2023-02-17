import { Income } from 'src/model/income.model';

export class IncomeService {
  incomes: Income[] = [
    new Income('salary', 1000),
    new Income('guitar sold', 300),
  ];
}
