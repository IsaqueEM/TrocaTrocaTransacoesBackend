export class User {
  private _id: number;
  private readonly _login: string;
  private _password: string;
  private _clientId: number;

  constructor(id: number, login: string, password: string, clientId: number) {
    this._id = id;
    this._login = login;
    this._password = password;
    this._clientId = clientId;
  }

  get id(): number {
    return this._id;
  }

  get login(): string {
    return this._login;
  }

  get password(): string {
    return this._password;
  }

  get clientId(): number {
    return this._clientId;
  }

  set id(value: number) {
    this._id = value;
  }

  set password(value: string) {
    this._password = value;
  }

  set clientId(value: number) {
    this._clientId = value;
  }
}
