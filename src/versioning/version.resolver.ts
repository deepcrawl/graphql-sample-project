import { Query } from "type-graphql";

import packageJson from "../../package.json";

export class VersionResolver {
  @Query()
  public version(): string {
    return packageJson.version;
  }
}
