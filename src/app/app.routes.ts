import { Routes } from '@angular/router';
import { CreateAccountComponent } from './modules/create-account/components/create-account/create-account.component';
import { TransactionHistoryComponent } from './modules/transaction-history/components/transaction-history/transaction-history.component';
import { TransferFundsComponent } from './modules/transfer-funds/components/transfer-funds/transfer-funds.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
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
