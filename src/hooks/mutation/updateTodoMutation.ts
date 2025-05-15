import { QUERY_KEY } from "@/constants";
import { updateTodoService } from "@/services/updateTodoService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTodoService,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY],
      });
    },
  });
};
