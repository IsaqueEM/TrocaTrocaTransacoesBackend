export class Card {
    private _cardId: number;
    private _cardName: string;
    private _cardNumber: string;
    private _expirationDate: Date;
    private _cvv: string;
    private _isCredit: boolean;
    private _accountNumber: string;

    constructor(cardId: number, cardName: string, cardNumber: string, expirationDate: Date, cvv: string, isCredit: boolean, accountNumber: string) {
        this._cardId = cardId;
        this._cardName = cardName;
        this._cardNumber = cardNumber;
        this._expirationDate = expirationDate;
        this._cvv = cvv;
        this._isCredit = isCredit;
        this._accountNumber = accountNumber;
    }

    get cardId(): number {
        return this._cardId;
    }

    get cardName(): string {
        return this._cardName;
    }

    get cardNumber(): string {
        return this._cardNumber;
    }

    get expirationDate(): Date {
        return this._expirationDate;
    }

    get cvv(): string {
        return this._cvv;
    }

    get isCredit(): boolean {
        return this._isCredit;
    }

    get accountNumber(): string {
        return this._accountNumber;
    }

    set cardId(value: number) {
        this._cardId = value;
    }

    set cardName(value: string) {
        this._cardName = value;
    }

    set cardNumber(value: string) {
        this._cardNumber = value;
    }

    set expirationDate(value: Date) {
        this._expirationDate = value;
    }

    set cvv(value: string) {
        this._cvv = value;
    }

    set isCredit(value: boolean) {
        this._isCredit = value;
    }

    set accountNumber(value: string) {
        this._accountNumber = value;
    }
    
    public static toCardModel(card: any): Card {
        return new Card(card.cardId, card.cardName, card.cardNumber, card.expirationDate, card.cvv, card.isCredit, card.accountNumber);
    }

    public static toCardModelArray(cards: any[]): Card[] {
        return cards.map(card => Card.toCardModel(card));
    }

    public static toCardDatabase(card: Card): any {
        return {
            cardId: card.cardId,
            cardName: card.cardName,
            cardNumber: card.cardNumber,
            expirationDate: card.expirationDate,
            cvv: card.cvv,
            isCredit: card.isCredit,
            accountNumber: card.accountNumber
        };
    }

    public static toCardDatabaseArray(cards: Card[]): any[] {
        return cards.map(card => Card.toCardDatabase(card));
    }
}