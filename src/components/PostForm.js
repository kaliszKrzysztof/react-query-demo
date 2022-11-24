import React from 'react'

const PostForm = ({ post, onSubmit, onCancel }) => {
  const handleSubmit = React.useCallback((e) => {
    e.preventDefault();
    onSubmit({
      ...post,
      title: e.target.title.value,
      description: e.target.description.value,
      body: e.target.body.value,
    });
  }, [onSubmit, post]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input type="text" name="title" placeholder="Title" defaultValue={post.title} required className="input input-bordered input-primary w-full" />
      <textarea name="description" className="textarea textarea-primary" placeholder="Description" required defaultValue={post.description} style={{ minHeight: 120 }}></textarea>
      <textarea name="body" className="textarea textarea-primary" placeholder="Body" required defaultValue={post.body} style={{ minHeight: 220 }}></textarea>
      <div className="flex justify-end gap-2">
        <button type="button" className="btn" onClick={onCancel}>Cancel</button>
        <button type="submit" className="btn btn-primary">Save</button>
      </div>
    </form>
  )
}

export default PostForm