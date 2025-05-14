import { API_URL } from "@/constants";

export const doneTodoService = async ({
  id,
  done,
}: {
  id: string;
  done: boolean;
}) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      done: !done,
    }),
  });
};
