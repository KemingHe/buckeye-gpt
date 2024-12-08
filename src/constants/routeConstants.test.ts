import { describe, expect, it } from "vitest";

import * as routeConstants from "./routeConstants";

describe("Route constants", (): void => {
  it("matches the snapshot", (): void => {
    expect(routeConstants).toMatchSnapshot();
  });
});
