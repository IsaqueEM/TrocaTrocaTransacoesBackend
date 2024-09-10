export class Clients {
    private _id: string;
    private _name: string;
    private _price: number;
  
    constructor(id: string, name: string, price: number) {
      this._id = id;
      this._name = name;
      this._price = price;
    }
  
    // Getters
    public get id(): string {
      return this._id;
    }
  
    public get name(): string {
      return this._name;
    }
  
    public get price(): number {
      return this._price;
    }
  
    // Setters
    public set name(newName: string) {
      if (!newName || newName.trim().length === 0) {
        throw new Error('Name cannot be empty');
      }
      this._name = newName;
    }
  
    public set price(newPrice: number) {
      if (newPrice <= 0) {
        throw new Error('Price must be greater than zero');
      }
      this._price = newPrice;
    }
  }
  