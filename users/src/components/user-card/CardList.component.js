import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./Card.component";

function CardList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/users`)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <UserCard users={users} />
    </div>
  );
}

export default CardList;
