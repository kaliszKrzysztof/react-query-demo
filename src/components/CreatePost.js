import React from 'react';
import Modal from 'react-modal';
import PostForm from './PostForm';

const CreatePost = ({ isOpen, onClose, onSave, width = 600 }) => {
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
      <h2 className="mb-5 text-2xl font-bold">Create new post</h2>
      <PostForm
        post={{ title: '', description: '', body: '' }}
        onSubmit={(post) => {
          onSave(post);
          onClose();
        }}
        onCancel={onClose}
      />
    </Modal>
  );
}

export default CreatePost