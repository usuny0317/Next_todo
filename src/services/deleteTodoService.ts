import { API_URL } from "@/constants";

export const deleteTodoService = async ({ id }: { id: string }) => {
  const response = await fetch(API_URL + "/" + id, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("데이터를 삭제하는 동안 문제가 발생했습니다.");
  }
};
