import React from 'react'
import { getImageUrl } from '../utils/image';

const Post = ({ post }) => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("${getImageUrl(post.id, 1000, 800)}")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">{post.title}</h1>
          <p className="mb-5">{post.description}</p>
          <p className="mb-5">{post.body}</p>
        </div>
      </div>
    </div>
  );
}

export default Post