import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { IncomesComponent } from './incomes/incomes.component';
import { ExpensesComponent } from './expenses/expenses.component';

import { IncomeService } from 'src/services/income.service';
import { ExpenseService } from 'src/services/expenses.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IncomesComponent,
    ExpensesComponent,
    FormComponent,
  ],
  imports: [BrowserModule],
  providers: [IncomeService, ExpenseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
