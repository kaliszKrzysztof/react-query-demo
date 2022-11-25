import { data } from "autoprefixer";
import axios from "axios"

const API_URL = 'http://localhost:3001';

axios.defaults.baseURL = API_URL;

export const getPosts = () => {
  return axios.get(`/posts?&_sort=id&_order=desc`).then(res => res.data.map(item => ({ id: item.id, title: item.title, description: item.description })));
}

export const getPost = (id) => {
  return axios.get(`/posts/${id}`).then(res => res.data);
}

export const addPost = (post) => {
  return axios.post('/posts', post).then(res => res.data);
}

export const editPost = (post) => {
  return axios.put(`/posts/${post.id}`, post).then(res => res.data);
}

export const removePost = (id) => {
  // throw new Error('Cannot remove...');
  return axios.delete(`/posts/${id}`).then(res => res.data);
}