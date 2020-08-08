import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import DeleteButton from "../components/DeleteButton";
import { Col, Row, Container } from "../components/grid";
import { List, ListItem } from "../components/List";

class Books extends Component {
  state = {
    books: []
  };
  componentDidMount() {
    this.loadBooks();
  }
  loadBooks = () => API.getBooks().then(res => this.setState({ books: res.data }));

  render() {
    return <div></div>;
  }
}

export default Books;
