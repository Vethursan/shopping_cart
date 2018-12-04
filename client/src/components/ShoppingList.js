import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";

class ShoppingList extends Component {
  state = {
    items: [
      { id: uuid(), name: "Macbook" },
      { id: uuid(), name: "CLA250" },
      { id: uuid(), name: "Addidas Continental 80" },
      { id: uuid(), name: "Yeezy Powerphase" }
    ]
  };

  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt("Enter Item");
            if (name) {
              this.setState({
                items: [...this.state.items, { id: uuid(), name }]
              });
            }
          }}
        >
          Add Item
        </Button>
        <ListGroup>
          <TransitionGroup className="shopping_list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState({
                        items: this.state.items.filter(item => item.id !== id)
                      });
                    }}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default ShoppingList;
