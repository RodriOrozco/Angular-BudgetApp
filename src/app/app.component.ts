import { Component } from '@angular/core';
import { Expense } from 'src/model/expense.model';
import { Income } from 'src/model/income.model';
import { ExpenseService } from 'src/services/expenses.service';
import { IncomeService } from 'src/services/income.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  incomes: Income[] = [];
  expenses: Expense[] = [];

  constructor(
    private IncomeService: IncomeService,
    private ExpenseService: ExpenseService
  ) {
    this.incomes = IncomeService.incomes;
    this.expenses = ExpenseService.expenses;
  }

  getIncomesTotal = (): number => {
    let totalIncomeValue: number = 0;
    this.incomes.forEach((income) => {
      totalIncomeValue += income.value;
    });
    return totalIncomeValue;
  };

  getExpensesTotal = (): number => {
    let totalExpenseValue: number = 0;
    this.expenses.forEach((expense) => {
      totalExpenseValue += expense.value;
    });
    return totalExpenseValue;
  };

  getPercentageTotal = (): number => {
    return this.getIncomesTotal() / this.getExpensesTotal();
  };

  getBudgetTotal = (): number => {
    return this.getIncomesTotal() - this.getExpensesTotal();
  };
}
