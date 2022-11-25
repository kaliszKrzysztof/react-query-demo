import React from 'react'
import { useRouter } from 'next/router';
import { editPost } from '../../src/api/posts';
import Post from '../../src/components/Post';
import Loader from '../../src/components/Loader';
import EditPost from '../../src/components/EditPost';
import { usePost } from '../../src/hooks/usePost';
import { useEditPost } from '../../src/hooks/useEditPost';

const PostPage = () => {
  const router = useRouter();
  const postId = parseInt(router.query.id, 10);
  const [editPostOpen, setEditPostOpen] = React.useState(false);
  const { data, isLoading, isError } = usePost(postId);
  const { mutate: editPost } = useEditPost();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="alert alert-error shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Error! Couldn&apos;t load post.</span>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Post post={data} />
      <button type="button" className="btn btn-primary ml-auto mt-2 block" onClick={() => setEditPostOpen(true)}>Edit post</button>
      <EditPost post={data} isOpen={editPostOpen} onSave={editPost} onClose={() => setEditPostOpen(false)} />
    </div>
  );
}

export default PostPage;