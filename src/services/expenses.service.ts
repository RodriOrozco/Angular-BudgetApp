import { Expense } from 'src/model/expense.model';

export class ExpenseService {
  expenses: Expense[] = [
    new Expense('paint the house', 600),
    new Expense('new cellphone', 500),
  ];

  deleteExpense = (expense: Expense) => {
    const expenseIndex = this.expenses.indexOf(expense);
    this.expenses.splice(expenseIndex, 1);
  };
}
