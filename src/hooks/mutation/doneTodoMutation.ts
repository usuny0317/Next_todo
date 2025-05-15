import { QUERY_KEY } from "@/constants";
import { doneTodoService } from "@/services/doneTodoService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDoneTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: doneTodoService,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY],
      });
    },
  });
};
