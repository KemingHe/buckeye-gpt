import { describe, expect, it } from "vitest";

import * as endpoints from "./apiEndpointConstants";

describe("API endpoint constants", (): void => {
  it("matches the snapshot", (): void => {
    expect(endpoints).toMatchSnapshot();
  });
});
