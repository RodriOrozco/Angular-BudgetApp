import { Component, OnInit, Input } from '@angular/core';
import { Expense } from 'src/model/expense.model';
import { ExpenseService } from 'src/services/expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.sass'],
})
export class ExpensesComponent implements OnInit {
  expenses: Expense[] = [];
  @Input() totalIncome!: number;

  constructor(private ExpenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenses = this.ExpenseService.expenses;
  }

  deleteCard = (expense: Expense) => {
    this.ExpenseService.deleteExpense(expense);
  };

  calculatePercentage = (expense: Expense): number => {
    return expense.value / this.totalIncome;
  };
}
