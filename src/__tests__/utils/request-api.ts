import axios from "axios";

export async function requestApi<TResponse>(url: string, queryOrMutation: string): Promise<TResponse> {
  const response = await axios.post<TResponse>(
    url,
    { query: queryOrMutation },
    { headers: { "Content-Type": "application/json" }, validateStatus: null },
  );
  return response.data;
}
