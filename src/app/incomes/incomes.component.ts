import { Component, OnInit } from '@angular/core';
import { Income } from 'src/model/income.model';
import { IncomeService } from 'src/services/income.service';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.sass'],
})
export class IncomesComponent implements OnInit {
  incomes: Income[] = [];

  constructor(private IncomeService: IncomeService) {}

  ngOnInit(): void {
    this.incomes = this.IncomeService.incomes;
  }
}
