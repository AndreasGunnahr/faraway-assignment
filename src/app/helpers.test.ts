import { isApiResponse } from "./helpers";

describe("Verify that error response is a corrrect API error", () => {
  test("should return false due to invalid response", () => {
    expect(isApiResponse({})).toBe(false);
  });

  test("should return true due to valid response", () => {
    expect(isApiResponse({ status: 404, data: { message: "Not found" } })).toBe(
      true
    );
  });
});
