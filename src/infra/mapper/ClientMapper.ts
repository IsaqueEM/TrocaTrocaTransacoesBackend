import { Client as ClientPrisma } from "@prisma/client" ;
import { Client } from "../../domain/entities/Client";
export class ClientMapper {
  static toDomain(clientPrisma: ClientPrisma) {
    return new Client(
      clientPrisma.id_cliente ?? '',
      clientPrisma.cpf ?? '',
      clientPrisma.nome ?? '',
      clientPrisma.telefone ?? '',
      clientPrisma.email ?? '',
      clientPrisma.endereco ?? ''
    );
  }
  //TODO: a database nao tem os atributos declarados 
  //FIX: resolvendo setando na database o que deve ser not null

  static toPersistence(client: Client) {
    return {
      clientId: client.clientId,
      cpf: client.cpf,
      nome: client.name,
      telefone: client.phone,
      email: client.email,
      endereco: client.address
    };
  }

}