import { useMutation, useQueryClient } from "@tanstack/react-query"
import { editPost } from "../api/posts"

export const useEditPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editPost,
    onSuccess: (post) => {
      queryClient.invalidateQueries({
        queryKey: ['posts', `${post.id}`],
      });
      queryClient.refetchQueries({
        queryKey: ['posts'],
      });
    },
  });
}