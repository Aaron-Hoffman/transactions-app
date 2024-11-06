import { Injectable } from '@angular/core';
import { Account, AccountCreateInput, Transaction } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }

  // Create Account Method
  createAccount(formInput: AccountCreateInput): Account {
    const existingAccounts = JSON.parse(localStorage.getItem('accounts') || "[]");
    const accountNumber = Number(localStorage.getItem('accountNumber')) || 1;
    const nextAccountNumber = accountNumber + 1 as unknown as string;

    const account: Account = {
      id: accountNumber,
      name: formInput.name,
      type: formInput.type,
      balance: formInput.balance,
      transactions: []
    }


    localStorage.setItem('accounts', JSON.stringify([...existingAccounts, account]))
    localStorage.setItem('accountNumber', nextAccountNumber);

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

    const existingAccounts = JSON.parse(localStorage.getItem('accounts') || "[]");
    const fromAccountIndex: number = existingAccounts.findIndex((account: Account) => account.id == fromAccount.id)
    const toAccountIndex: number = existingAccounts.findIndex((account: Account) => account.id == toAccount.id)

    existingAccounts[fromAccountIndex] = fromAccount;
    existingAccounts[toAccountIndex] = toAccount;
    localStorage.setItem('accounts', JSON.stringify(existingAccounts))

    return 
  }

  // Get All Accounts Method
  getAllAccounts(): Account[] {
    return JSON.parse(localStorage.getItem('accounts') || "[]");
  }
}
