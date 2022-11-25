import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getPost } from '../../src/api/posts';

export const usePost = (id) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ['posts', id],
    queryFn: ({ queryKey }) => {
      return getPost(queryKey[1]);
    },
    enabled: !!id,
    initialData: () => {
      return queryClient.getQueryData({ queryKey: ['posts'] })?.find(p => `${p.id}` === `${id}`)
    },
  });
}
