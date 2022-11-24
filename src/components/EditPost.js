import React from 'react';
import Modal from 'react-modal';
import PostForm from './PostForm';

const EditPost = ({ isOpen, onClose, onSave, width = 600, post }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Create Post"
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      shouldFocusAfterRender
      style={{
        overlay: { backgroundColor: null },
        content: {
          position: 'relative',
          left: 0,
          top: 0,
          backgroundColor: null,
          border: null,
          borderRadius: null,
          padding: null,
          inset: null,
          width,
          maxWidth: '85%',
          maxHeight: '85%',
          height: 'auto',
        },
      }}
    >
      <h2 className="mb-5 text-2xl font-bold">Edit post: {post.id}</h2>
      <PostForm
        post={post}
        onSubmit={(post) => {
          onSave(post);
          onClose();
        }}
        onCancel={onClose}
      />
    </Modal>
  );
}

export default EditPost