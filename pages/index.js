import React from 'react';
import { getPosts, removePost, addPost } from '../src/api/posts';
import PostListItem from '../src/components/PostListItem';
import CreatePost from '../src/components/CreatePost';
import Loader from '../src/components/Loader';

const Home = () => {
  const [createPostOpen, setCreatePostOpen] = React.useState(false);
  const [state, setState] = React.useReducer((_, action) => action, {
    isLoading: true,
  });

  const fetch = React.useCallback(async () => {
    setState({ isLoading: true })
    try {
      const data = await getPosts();
      setState({ isSuccess: true, data })
    } catch (error) {
      setState({ isError: true, error })
    }
  }, []);

  const handleRemove = React.useCallback((id) => {
      removePost(id).then(fetch);
  }, [fetch]);

  const handleAdd = React.useCallback(post => {
    addPost(post).then(fetch);
  }, [fetch]);

  React.useEffect(() => {
    fetch()
  }, [fetch]);

  if (state.isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (state.isError) {
    return (
      <div className="alert alert-error shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Error! Coultn&apos;t load post.</span>
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
      {state.data.map((post) => (
        <PostListItem key={post.id} post={post} onRemove={handleRemove} />
      ))}
      <CreatePost isOpen={createPostOpen} onClose={() => setCreatePostOpen(false)} onSave={handleAdd} />
    </div>
  );
};

export default Home;
