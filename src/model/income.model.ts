export class Income {
  description: string;
  value: number;
  constructor(incomeDescription: string, incomeValue: number) {
    this.description = incomeDescription;
    this.value = incomeValue;
  }
}
