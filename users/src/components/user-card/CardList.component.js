import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./Card.component";

function CardList() {
  const [users, setUsers] = useState([]);

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

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/users`)
      .then(res => {
        const userArr = res.data.map(user => {
          return { ...user, flipped: false };
        });
        setUsers(userArr);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      {users.map(user => (
        <UserCard user={user} toggleFlipped={toggleFlipped} />
      ))}
    </div>
  );
}

export default CardList;
