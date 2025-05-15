import { QUERY_KEY } from "@/constants";
import { deleteTodoService } from "@/services/deleteTodoService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTodoService,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY],
      });
    },
  });
};
