import { API_URL, ERROR } from "@/constants";

export const deleteTodoService = async ({ id }: { id: string }) => {
  const response = await fetch(API_URL + "/" + id, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(ERROR.DELETE);
  }
};
