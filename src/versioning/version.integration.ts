import { ApolloServer } from "apollo-server-express";

import { requestApi } from "../__tests__/utils/request-api";
import { App } from "../app";

let serverUrl: string;
let server: ApolloServer;

beforeEach(async () => {
  const app = new App(0);
  const { server: apolloServer, serverInfo } = await app.start();
  serverUrl = serverInfo.url;
  server = apolloServer;
});

afterEach(() => server.stop());

it("returns versions", async () => {
  const response = await requestApi<{ data: { version: string } }>(serverUrl, "query { version }");
  expect(response.data.version).toBe("0.0.2");
  await server.stop();
});
