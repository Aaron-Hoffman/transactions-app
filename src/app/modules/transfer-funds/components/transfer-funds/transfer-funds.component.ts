import { Component } from '@angular/core';
import { TransactionService } from '../../../../services/transaction.service';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { Account } from '../../../../types/types';

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
    // TODO: Add Validators
    from: ['', [Validators.required]],
    to: ['', [Validators.required, this.notEqualTo('from')]],
    amount: [0, [Validators.required, Validators.min(0.01), Validators.max(0)]],
  })

  notEqualTo(otherControlName: string) {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        if (!control.parent) {
            return null; 
        }

        const toValue = control.value;
        const fromValue = control.parent.get(otherControlName)?.value;
    
        if (toValue !== fromValue) {
            return null;
        }

        return {
            'notequalto': true
        }
    };
  }

  onChange() {
    const fromAccount: Account = this.transactionService.getAccountById(Number(this.transferForm.value.from));
    const amountFormControl = this.transferForm.get('amount');
    amountFormControl?.clearValidators()

    if (!fromAccount) return amountFormControl?.addValidators([Validators.required, Validators.min(0.01), Validators.max(0)]);
    
    return amountFormControl?.addValidators([Validators.required, Validators.min(0.01), Validators.max(fromAccount.balance)]);
  }

  onSubmit() {
    const { from, to, amount } = this.transferForm.value;

    const fromAccount = this.transactionService.getAccountById(Number(from));
    const toAccount = this.transactionService.getAccountById(Number(to));
    
    this.transactionService.transferFunds(fromAccount, toAccount, Number(amount))
    this.accounts = this.transactionService.getAllAccounts();
  }
} 
