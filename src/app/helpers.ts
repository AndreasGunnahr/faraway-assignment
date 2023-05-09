import { ApiErrorResponse } from "types/starwars";

export const isApiResponse = (error: unknown): error is ApiErrorResponse => {
  return (
    typeof error === "object" &&
    error != null &&
    "status" in error &&
    typeof (error as any).status === "number"
  );
};
