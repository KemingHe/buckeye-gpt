import { describe, expect, it } from "vitest";

import * as routes from "./routeConstants";

describe("routeConstants", () => {
  it("matches the snapshot", () => {
    expect(routes).toMatchSnapshot();
  });
});
