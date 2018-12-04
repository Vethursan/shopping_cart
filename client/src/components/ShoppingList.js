import React, { component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transiton-group";
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
    return(
        <Container>
            <Button
            color="dark"
            style={{marginBottom:'2rem' '6:00'}}>Add Item</Button>
        </Container>
    );
  }
}

export default ShoppingList;
