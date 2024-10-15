import { Card } from "../entities/Card";

export interface ICardRepository {
  save(card: Card): Promise<void>;
  findByCardNumber(cardNumber: string): Promise<Card>;
  findById(cardId: number): Promise<Card>;
  findAll(): Promise<Card[]>;
  update(card: Card): Promise<void>;
  delete(cardId: number): Promise<void>;
}