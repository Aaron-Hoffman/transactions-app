export interface Account {
    id: number,
    name: string,
    type: string,
    balance: number,
    transactions: Transaction[]
}

export interface AccountCreateInput {
    name: string,
    type: string,
    balance: number,
}

export interface Transaction {
    id: number,
    account: Account,
    amount: number,
}