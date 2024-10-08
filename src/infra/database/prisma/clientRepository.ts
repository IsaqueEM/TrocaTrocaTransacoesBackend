import { PrismaClient } from '@prisma/client';
import { ClientRepository } from '../../../domain/repositories/clientRepository';

export class PrismaClientRepository implements ClientRepository {
  constructor(private prisma: PrismaClient) {}

  async save(client: Client): Promise<void> {
    await this.prisma.client.create({
      data: {
        email: client.email,
        name: client.name,
        password: client.password,
      },
    });
  }

  async findByEmail(email: string): Promise<Client> {
    return await this.prisma.client.findUnique({
      where: {
        email,
      },
    });
  }

  async findById(clientId: number): Promise<Client> {
    return await this.prisma.client.findUnique({
      where: {
        id: clientId,
      },
    });
  }

  async findAll(): Promise<Client[]> {
    return await this.prisma.client.findMany();
  }

  async update(client: Client): Promise<void> {
    await this.prisma.client.update({
      where: {
        id: client.id,
      },
      data: {
        email: client.email,
        name: client.name,
        password: client.password,
      },
    });
  }

  async delete(clientId: number): Promise<void> {
    await this.prisma.client.delete({
      where: {
        id: clientId,
      },
    });
  }
}
O;
