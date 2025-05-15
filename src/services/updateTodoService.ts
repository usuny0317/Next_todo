import { API_URL, ERROR } from "@/constants";

export const updateTodoService = async ({
  id,
  title,
}: {
  id: string;
  title: string;
}) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
    }),
  });
  if (!response.ok) {
    throw new Error(ERROR.UPDATE);
  }
};
