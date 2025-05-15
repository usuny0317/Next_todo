import { QUERY_KEY } from "@/constants";
import { getTodoService } from "@/services/getTodoService";
import { useQuery } from "@tanstack/react-query";

export const useGetTodoQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: getTodoService,
  });
};
