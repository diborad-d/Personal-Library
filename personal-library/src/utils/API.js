import axios from "axios";

export default {
  // get all books
  getBooks: () => {
    return axios.get("/api/books");
  },

  // get books with :id

  getBook: id => {
    return axios.get("/api/books" + id);
  },
  // delete a book by id
  deleteBook: id => {
    return axios.delete("/api/books" + id);
  },
  // save book to db
  saveBook: bookData => {
    return axios.post("/api/books", bookData);
  }
};
