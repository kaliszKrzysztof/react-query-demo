import { useMutation, useQueryClient } from "@tanstack/react-query"
import { removePost } from "../api/posts"

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: removePost,
    retry: false,
    onMutate: (id) => {
      const previousPosts = queryClient.getQueryData(['posts'])
      queryClient.setQueryData(['posts'], (data) => {
        return data?.filter(p => p.id !== id);
      });
      return { previousPosts };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(['posts'], context.previousPosts)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['posts'],
      });
    },
  });
}