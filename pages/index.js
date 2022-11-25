import React from 'react';
import { getPosts, removePost, addPost } from '../src/api/posts';
import PostListItem from '../src/components/PostListItem';
import CreatePost from '../src/components/CreatePost';
import Loader from '../src/components/Loader';
import { usePosts } from '../src/hooks/usePosts';
import { useCreatePost } from '../src/hooks/useCreatePost';
import { useDeletePost } from '../src/hooks/useDeletePost';

const Home = () => {
  const [createPostOpen, setCreatePostOpen] = React.useState(false);
  const { data, isLoading, isError } = usePosts();
  const { mutate: createPost } = useCreatePost();
  const { mutate: deletePost } = useDeletePost();

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
      <div className="flex justify-between">
        <h1 className="mb-5 text-5xl font-bold">Read some great articles!</h1>
        <button type="button" className="btn btn-primary" onClick={() => setCreatePostOpen(true)}>
          Create post
        </button>
      </div>
      {(data || []).map((post) => (
        <PostListItem key={post.id} post={post} onRemove={deletePost} />
      ))}
      <CreatePost isOpen={createPostOpen} onClose={() => setCreatePostOpen(false)} onSave={createPost} />
    </div>
  );
};

export default Home;
