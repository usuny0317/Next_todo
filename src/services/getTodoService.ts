import { API_URL, ERROR } from "@/constants";

export const getTodoService = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(ERROR.GET);
  }
  return response.json();
};
