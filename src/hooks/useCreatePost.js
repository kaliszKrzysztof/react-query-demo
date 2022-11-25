import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addPost } from "../api/posts"

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    },
  });
}