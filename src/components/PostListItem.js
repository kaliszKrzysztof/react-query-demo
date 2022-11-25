import React from 'react'
import Link from 'next/link'
import { getImageUrl } from '../utils/image';

const Post = ({ post, onRemove }) => {
  return (
    <div className="card md:card-side bg-base-100 shadow-xl mb-6">
      <figure><img src={getImageUrl(post.id, 250, 250)} alt={post.title} /></figure>
      <div className="card-body flex-1">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.description}</p>
        <div className="card-actions justify-end">
          <div className="btn-group">
            <Link className="btn btn-active" href={`/posts/${post.id}`}>
              Read More
            </Link>
            <button className="btn btn-error" title="Remove" onClick={() => onRemove(post.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post