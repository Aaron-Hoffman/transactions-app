import { Injectable } from '@angular/core';
import { Account, AccountCreateInput, Transaction } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  public accounts: Account[] = [];
  private accountNumber: number = 1;

  constructor() { }

  // Create Account Method
  createAccount(formInput: AccountCreateInput): Account {
    const account: Account = {
      id: this.accountNumber,
      name: formInput.name,
      type: formInput.type,
      balance: formInput.balance,
      transactions: []
    }

    this.accounts = [...this.accounts, account]
    this.accountNumber++;
    
    return account;
  }

  // Transfer Funds Method
  transferFunds(fromAccount: Account, toAccount: Account, amount: number) {
    const fromTransaction: Transaction = {
      id: fromAccount.transactions.length + 1,
      account: fromAccount,
      amount: -amount
    }

    const toTransaction: Transaction = {
      id: toAccount.transactions.length + 1,
      account: fromAccount,
      amount: amount
    }

    fromAccount.balance -= amount;
    fromAccount.transactions = [...fromAccount.transactions, fromTransaction]
    toAccount.balance += amount;
    toAccount.transactions = [...toAccount.transactions, toTransaction]

    const fromAccountIndex: number = this.accounts.findIndex(account => account.id == fromAccount.id)
    const toAccountIndex: number = this.accounts.findIndex(account => account.id == toAccount.id)

    this.accounts[fromAccountIndex] = fromAccount;
    this.accounts[toAccountIndex] = toAccount;

    return 
  }

  // Get All Accounts Method
  getAllAccounts(): Account[] {
    return this.accounts;
  }

  // Get Account By Id Method -- Not sure if I need this yet

  // Get all transactions Method -- Don't think I need this
//   getAccountTransactions(accountAccount): Transaction[] {
//     return this.transactions;
//   }
}
