import { getTodoService } from "@/services/getTodoService";
import { useQuery } from "@tanstack/react-query";

export const useGetTodoQuery = () => {
  return useQuery({
    queryKey: ["TodoList"],
    queryFn: getTodoService,
  });
};
