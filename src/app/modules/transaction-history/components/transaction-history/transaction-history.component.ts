import { Component } from '@angular/core';
import { TransactionService } from '../../../../services/transaction.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [TransactionService],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.scss'
})
export class TransactionHistoryComponent {
  constructor(private formBuilder: FormBuilder, private transactionService: TransactionService) {}

  accounts = this.transactionService.getAllAccounts();

  accountSelectForm = this.formBuilder.group({
    account: [this.accounts[0].id, []],
  })

  selectedAccount = this.transactionService.getAccountById(this.accounts[0].id)

  onChange() {
    this.selectedAccount = this.transactionService.getAccountById(Number(this.accountSelectForm.value.account))
  }


  // Should provide a dropdown to select an account and display all transactions for the selected account
}
