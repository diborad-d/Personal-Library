const db = require("../models");

// define methods for bookscontroller
module.exports = {
  findAll: (req, res) => {
    db.Book.find(req.query);
  }
};
