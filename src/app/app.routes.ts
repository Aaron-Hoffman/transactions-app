import { Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { TransferFundsComponent } from './transfer-funds/transfer-funds.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'create-account',
        component: CreateAccountComponent
    },
    {
        path: 'transfer-funds',
        component: TransferFundsComponent
    },
    {
        path: 'transaction-history',
        component: TransactionHistoryComponent
    },
];
