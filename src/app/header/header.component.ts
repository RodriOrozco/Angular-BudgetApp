import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  @Input() budgetTotal!: number;
  @Input() percentageTotal!: number;
  @Input() incomesTotal!: number;
  @Input() expensesTotal!: number;
}
