export interface Account {
    id: number,
    type: string,
    balance: number,
    transactions: Transaction[]
}

export interface Transaction {
    id: number,
    account: Account,
    amount: number,
}