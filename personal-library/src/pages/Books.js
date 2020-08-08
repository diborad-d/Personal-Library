import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import DeleteButton from "../components/DeleteButton";
import { Col, Row, Container } from "../components/grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: []
  };
  componentDidMount() {
    this.loadBooks();
  }
  loadBooks = () =>
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Would You like to Read Today? </h1>
            </Jumbotron>
            <Form>
              <Input name="title" placeholder="Title (required)" />
              <Input name="author" placeholder="Author (required)" />
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
              <FormBtn>Submit Book</FormBtn>
            </Form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books in my Library</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Dispay</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
