import pino from "pino";

import { App } from "./app";

const logger = pino();
const port = process.env["PORT"] ? parseInt(process.env["PORT"]) : 3333;

new App(port)
  .start()
  .then(({ serverInfo: { url } }) => logger.info("Server is running, GraphQL Playground available at %s", url))
  .catch(error => {
    logger.error(error);
    process.exit(1);
  });
