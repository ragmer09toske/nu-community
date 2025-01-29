import axios from "axios";

const API_BASE_URL = "http://localhost/api";

// Comments API
export const getAllComments = () => axios.get(`${API_BASE_URL}/comments`);
export const getCommentById = (id) =>
  axios.get(`${API_BASE_URL}/comments/${id}`);
export const createComment = (data) =>
  axios.post(`${API_BASE_URL}/comments`, data);
export const updateComment = (id, data) =>
  axios.put(`${API_BASE_URL}/comments/${id}`, data);
export const deleteComment = (id) =>
  axios.delete(`${API_BASE_URL}/comments/${id}`);

// Hearts API
export const getAllHearts = () => axios.get(`${API_BASE_URL}/hearts`);
export const getHeartById = (id) => axios.get(`${API_BASE_URL}/hearts/${id}`);
export const createHeart = (data) => axios.post(`${API_BASE_URL}/hearts`, data);
export const updateHeart = (id, data) =>
  axios.put(`${API_BASE_URL}/hearts/${id}`, data);
export const deleteHeart = (id) => axios.delete(`${API_BASE_URL}/hearts/${id}`);

// Downloads API
export const getAllDownloads = () => axios.get(`${API_BASE_URL}/downloads`);
export const getDownloadById = (id) =>
  axios.get(`${API_BASE_URL}/downloads/${id}`);
export const createDownload = (data) =>
  axios.post(`${API_BASE_URL}/downloads`, data);
export const updateDownload = (id, data) =>
  axios.put(`${API_BASE_URL}/downloads/${id}`);
export const deleteDownload = (id) =>
  axios.delete(`${API_BASE_URL}/downloads/${id}`);
