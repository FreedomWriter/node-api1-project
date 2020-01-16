import React from "react";
import UserCard from "./Card.component";
import { useHistory } from "react-router-dom";

import { CardContainer, StyledButton, ListContainer } from "./Card.styles";

function CardList({ users, setUsers }) {
  const history = useHistory();

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
      <ListContainer>
        <StyledButton onClick={() => history.pushState("/")}>
          Add Bio
        </StyledButton>
      </ListContainer>
      <CardContainer>
        {users.map(user => (
          <UserCard user={user} toggleFlipped={toggleFlipped} />
        ))}
      </CardContainer>
    </>
  );
}

export default CardList;
