export class Transaction {
    private _transactionId: number;
    private _accountNumber: string;
    private _amount: number;
    private _transactionType: string;
    private _transactionDate: Date;

    constructor(transactionId: number, accountNumber: string, amount: number, transactionType: string, transactionDate: Date) {
        this._transactionId = transactionId;
        this._accountNumber = accountNumber;
        this._amount = amount;
        this._transactionType = transactionType;
        this._transactionDate = transactionDate;
    }

    get transactionId(): number {
        return this._transactionId;
    }

    get accountNumber(): string {
        return this._accountNumber;
    }

    get amount(): number {
        return this._amount;
    }

    get transactionType(): string {
        return this._transactionType;
    }

    get transactionDate(): Date {
        return this._transactionDate;
    }

    set transactionId(value: number) {
        this._transactionId = value;
    }

    set accountNumber(value: string) {
        this._accountNumber = value;
    }

    set amount(value: number) {
        this._amount = value;
    }

    set transactionType(value: string) {
        this._transactionType = value;
    }

    set transactionDate(value: Date) {
        this._transactionDate = value;
    }

    public static toTransactionModel(transaction: any): Transaction {
        return new Transaction(transaction.transactionId, transaction.accountNumber, transaction.amount, transaction.transactionType, transaction.transactionDate);
    }

    public static toTransactionModelArray(transactions: any[]): Transaction[] {
        return transactions.map(transaction => Transaction.toTransactionModel(transaction));
    }

    public static toTransactionDatabase(transaction: Transaction): any {
        return {
            transactionId: transaction.transactionId,
            accountNumber: transaction.accountNumber,
            amount: transaction.amount,
            transactionType: transaction.transactionType,
            transactionDate: transaction.transactionDate
        };
    }
}