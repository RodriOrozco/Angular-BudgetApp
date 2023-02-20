import { Income } from 'src/model/income.model';

export class IncomeService {
  incomes: Income[] = [
    new Income('salary', 1000),
    new Income('guitar sold', 300),
  ];

  deleteIncome = (income: Income) => {
    const incomeIndex = this.incomes.indexOf(income);
    this.incomes.splice(incomeIndex, 1);
  };
}
