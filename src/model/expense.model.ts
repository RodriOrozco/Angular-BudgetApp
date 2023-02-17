export class Expense {
  description: string;
  value: number;
  constructor(expenseDescription: string, expenseValue: number) {
    this.description = expenseDescription;
    this.value = expenseValue;
  }
}
