import "reflect-metadata";

import { resolve } from "path";

import { ApolloServer, ServerInfo } from "apollo-server";
import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";

import { VersionResolver } from "./versioning/version.resolver";

export class App {
  private resolvers: [Function, ...Function[]] = [VersionResolver];

  constructor(private readonly port: number) {}

  public async start(): Promise<{ server: ApolloServer; serverInfo: ServerInfo }> {
    const schema = await this.buildSchema();

    const server = new ApolloServer({ schema });

    const serverInfo = await server.listen(this.port);
    return { server, serverInfo };
  }

  public buildSchema(): Promise<GraphQLSchema> {
    return buildSchema({
      resolvers: this.resolvers,
      emitSchemaFile: resolve(__dirname, "schema.gql"),
    });
  }
}
