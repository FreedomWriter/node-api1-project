import React from "react";

import {
  Card,
  CardFront,
  CardTitle,
  CardBack,
  CardDescription,
  CardContainer
} from "./Card.styles";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function UserCard({ user, toggleFlipped }) {
  console.log(user);
  const handleClick = () => {
    toggleFlipped(user.id);
  };

  return (
    <div>
      {/* <GridRow>
        <GridColumn sm="3" lg="2"> */}
      <Card
        onClick={handleClick}
        className={user.flipped ? "flipped" : ""}
        key={user.id}
      >
        <CardFront>
          <CardTitle>{user.name}</CardTitle>
        </CardFront>

        <CardBack>
          <CardDescription>{user.bio}</CardDescription>
        </CardBack>
      </Card>
      {/* </GridColumn>
      </GridRow> */}
    </div>
  );
}

export default UserCard;
