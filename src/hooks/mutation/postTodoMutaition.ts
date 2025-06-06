import { QUERY_KEY } from "@/constants";
import { postTodoService } from "@/services/postTodoService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePostTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postTodoService,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY],
      });
    },
  });
};
