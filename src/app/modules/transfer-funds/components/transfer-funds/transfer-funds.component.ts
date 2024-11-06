import { Component } from '@angular/core';
import { TransactionService } from '../../../../services/transaction.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-transfer-funds',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  providers: [TransactionService],
  templateUrl: './transfer-funds.component.html',
  styleUrl: './transfer-funds.component.scss'
})
export class TransferFundsComponent {
  constructor(private formBuilder: FormBuilder, private transactionService: TransactionService) {}

  accounts = this.transactionService.getAllAccounts();
  // Form should use transaction service to update accounts after transfer
  transferForm = this.formBuilder.group({
    from: ['', []],
    to: ['', []],
    amount: [0, []],
  })

  onSubmit() {
    // const { name, type, balance } = this.accountForm.value;
    
    // const formData: AccountCreateInput = {
    //   name: name || '',
    //   type: type || '',
    //   balance: balance || 0
    // }

    // const createdAccount = this.transactionService.createAccount(formData)
    // this.accounts = this.transactionService.getAllAccounts();
    // console.log(createdAccount);
    // console.log(this.accounts)
    console.log('hello')
  }
} 
