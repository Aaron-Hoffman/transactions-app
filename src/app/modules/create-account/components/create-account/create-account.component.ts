import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TransactionService } from '../../../../services/transaction.service';
import { AccountCreateInput } from '../../../../types/types';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  providers: [TransactionService],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {
  constructor(private formBuilder: FormBuilder, private transactionService: TransactionService) {}
  // Should fetch all accounts and display them
  accounts = this.transactionService.getAllAccounts();
  // Form should use transaction service to create a new account
  accountForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    type: ['chequing', [Validators.required]],
    balance: [0, [Validators.required, Validators.min(0)]],
  })

  onSubmit() {
    const { name, type, balance } = this.accountForm.value;
    
    const formData: AccountCreateInput = {
      name: name || '',
      type: type || '',
      balance: balance || 0
    }

    const createdAccount = this.transactionService.createAccount(formData)
    this.accounts = this.transactionService.getAllAccounts();
    console.log(createdAccount);
    console.log(this.accounts)
  }
}
