import React, { useState } from "react";

import {
  GridContainer,
  GridColumn,
  GridRow,
  Card,
  CardFront,
  CardNumber,
  CardTitle,
  CardBack,
  CardDescription
} from "./Card.styles";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function UserCard({ users }) {
  const [toggle, setToggle] = useState(true);

  const flipCard = e => {
    e.preventDefault();
    users.map(user => {
      if (user.id === id) {
        setToggle(!toggle);
      }
    });
    setToggle(!toggle);
  };

  return (
    <GridContainer>
      {/* <GridRow>
        <GridColumn sm="3" lg="2"> */}
      {users.map(user => {
        return (
          <Card
            onClick={flipCard}
            className={toggle ? "flipped" : ""}
            key={user.id}
          >
            <CardFront>
              <CardTitle>{user.name}</CardTitle>
            </CardFront>

            <CardBack>
              <CardDescription>{user.bio}</CardDescription>
            </CardBack>
          </Card>
        );
      })}
      {/* </GridColumn>
      </GridRow> */}
    </GridContainer>
  );
}

export default UserCard;
