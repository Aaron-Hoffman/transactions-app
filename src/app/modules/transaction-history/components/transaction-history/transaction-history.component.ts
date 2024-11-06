import { Component } from '@angular/core';
import { TransactionService } from '../../../../services/transaction.service';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [],
  providers: [TransactionService],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.scss'
})
export class TransactionHistoryComponent {
  constructor(private transactionService: TransactionService) {}

  accounts = this.transactionService.getAllAccounts();
  // Should provide a dropdown to select an account and display all transactions for the selected account
}
