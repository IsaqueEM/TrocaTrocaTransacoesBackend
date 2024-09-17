export class Client {
    private _clientId: number;
    private _name: string;
    private _cpf: string;
    private _email: string;
    private _password: string;

    constructor(clientId: number, name: string, cpf: string, email: string, password: string) {
        this._clientId = clientId;
        this._name = name;
        this._cpf = cpf;
        this._email = email;
        this._password = password;
    }

    get clientId(): number {
        return this._clientId;
    }

    get name(): string {
        return this._name;
    }

    get cpf(): string {
        return this._cpf;
    }

    get email(): string {
        return this._email;
    }

    get password(): string {
        return this._password;
    }

    set clientId(value: number) {
        this._clientId = value;
    }

    set name(value: string) {
        this._name = value;
    }

    set cpf(value: string) {
        this._cpf = value;
    }

    set email(value: string) {
        this._email = value;
    }

    set password(value: string) {
        this._password = value;
    }

    public static toClientModel(client: any): Client {
        return new Client(client.clientId, client.name, client.cpf, client.email, client.password);
    }

    public static toClientModelArray(clients: any[]): Client[] {
        return clients.map(client => Client.toClientModel(client));
    }

    public static toClientDatabase(client: Client): any {
        return {
            clientId: client.clientId,
            name: client.name,
            cpf: client.cpf,
            email: client.email,
            password: client.password
        };
    }
}