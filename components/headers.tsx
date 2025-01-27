export const getAuthHeaders = (
  isJsonRequest = false,
): Record<string, string> => {
  const id = "01JJ8BV4GJXPF64PB20H0AAEH7";

  if (!id) {
    console.warn("No token available for authorization.");

    return {};
  }

  const headers: Record<string, string> = {
    "User-ID": id,
  };

  if (isJsonRequest) {
    headers["Content-Type"] = "application/json";
  }

  return headers;
};
