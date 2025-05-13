import { API_URL } from "@/constants";

export const getTodoService = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("데이터를 불러오지 못했습니다.");
  }
  return response.json();
};
