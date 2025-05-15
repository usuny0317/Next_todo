import { API_URL, ERROR } from "@/constants";

export const postTodoService = async ({ title }: { title: string }) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      done: false,
    }),
  });
  if (!response.ok) {
    throw new Error(ERROR.POST);
  }
};
