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

function UserCard({ user, toggleFlipped }) {
  console.log(user);
  const handleClick = e => {
    console.log("CLLLLIIICCKKKKEEDDD");
    toggleFlipped(user.id);
  };

  return (
    <GridContainer>
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
    </GridContainer>
  );
}

export default UserCard;
