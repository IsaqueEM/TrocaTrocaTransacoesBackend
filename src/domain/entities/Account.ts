export class Account {
    private _accountNumber: string;
    private _balance: number;
    private _cpf: string;

    constructor(accountNumber: string, balance: number, cpf: string) {
        this._accountNumber = accountNumber;
        this._balance = balance;
        this._cpf = cpf;
    }

    get accountNumber(): string {
        return this._accountNumber;
    }

    get balance(): number {
        return this._balance;
    }

    get cpf(): string {
        return this._cpf;
    }

    set accountNumber(value: string) {
        this._accountNumber = value;
    }

    set balance(value: number) {
        this._balance = value;
    }

    set cpf(value: string) {
        this._cpf = value;
    }

    public static toAccountModel(account: any): Account {
        return new Account(account.accountNumber, account.balance, account.cpf);
    }

    public static toAccountModelArray(accounts: any[]): Account[] {
        return accounts.map(account => Account.toAccountModel(account));
    }

    public static toAccountDatabase(account: Account): any {
        return {
            accountNumber: account.accountNumber,
            balance: account.balance,
            cpf: account.cpf
        };
    }
}