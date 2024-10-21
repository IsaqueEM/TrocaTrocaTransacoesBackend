import { Card } from '../entities/Card';
export interface ICardRepository {
  save(card: Card): Promise<Card | null>;
  findByNumber(cardNumber: string): Promise<Card | null>;
  findById(cardId: number): Promise<Card | null>;
  findAll(): Promise<Card[]>;
  update(card: Card): Promise<Card | null>;
  delete(cardId: number): Promise<Card | null>;
}
