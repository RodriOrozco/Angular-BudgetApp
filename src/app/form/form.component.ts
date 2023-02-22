import { Component } from '@angular/core';
import { Expense } from 'src/model/expense.model';
import { Income } from 'src/model/income.model';
import { ExpenseService } from 'src/services/expenses.service';
import { IncomeService } from 'src/services/income.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent {
  selectType: string = 'incomeOperation';
  descriptionInput: string = '';
  valueInput!: number;

  constructor(
    private IncomeService: IncomeService,
    private ExpenseService: ExpenseService
  ) {}

  selectOperation = (event: Event): void => {
    this.selectType = (event.target as HTMLSelectElement).value;
    console.log(this.selectType);
  };

  addNewValue = () => {
    if (this.selectType === 'incomeOperation') {
      this.IncomeService.incomes.push(
        new Income(this.descriptionInput, this.valueInput)
      );
    } else {
      this.ExpenseService.expenses.push(
        new Expense(this.descriptionInput, this.valueInput)
      );
    }
    this.descriptionInput = '';
    this.valueInput = 0;
  };
}
