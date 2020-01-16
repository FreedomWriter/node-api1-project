import React from "react";
import { Redirect } from "react-router";
import UserCard from "./Card.component";

import { CardContainer, StyledButton, ListContainer } from "./Card.styles";

function CardList({ users, setUsers }) {
  const toggleFlipped = id => {
    const toggleArr = users.map(user => {
      if (user.id === id) {
        return {
          ...user,
          flipped: !user.flipped
        };
      } else {
        return user;
      }
    });
    setUsers(toggleArr);
  };

  return (
    <>
      <CardContainer>
        {users.map(user => (
          <UserCard user={user} toggleFlipped={toggleFlipped} />
        ))}
      </CardContainer>
    </>
  );
}

export default CardList;
