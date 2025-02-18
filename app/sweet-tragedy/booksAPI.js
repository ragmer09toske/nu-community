import axios from "axios";

const API_BASE_URL = "http://localhost:8000/books";

// Fetch all books
export const getBooks = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

// Create a new book
export const createBook = async (bookData) => {
  try {
    const response = await axios.post(API_BASE_URL, bookData);
    return response.data;
  } catch (error) {
    console.error("Error creating book:", error);
    throw error;
  }
};

// Update a book
export const updateBook = async (id, bookData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, bookData);
    return response.data;
  } catch (error) {
    console.error("Error updating book:", error);
    throw error;
  }
};

// Delete a book
export const deleteBook = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting book:", error);
    throw error;
  }
};
