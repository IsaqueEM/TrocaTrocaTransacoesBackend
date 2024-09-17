import { Client } from "../entities/Client";

export interface ClientRepository {
    save(client: Client): Promise<void>;
    findByEmail(email: string): Promise<Client>;
    findById(clientId: number): Promise<Client>;
    findAll(): Promise<Client[]>;
    update(client: Client): Promise<void>;
    delete(clientId: number): Promise<void>;
    //TODO: Add more methods if needed
}