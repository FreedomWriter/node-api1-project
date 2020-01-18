import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import UserForm from "./components/user-form/UserForm.component";
import UserCard from "./components/user-card/Card.component";
import CardList from "./components/user-card/CardList.component";

function App() {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    bio: ""
  });

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
    axios
      .post(`http://localhost:4000/api/users`, userData)
      .then(res => console.log(res))
      .catch(err => err);
  }, [userData]);

  const addStory = formData => {
    setUserData(formData);
    if (formData.name !== "" && formData.bio !== "") {
      axios
        .post(`http://localhost:4000/api/users`, formData)
        .then(res => setUsers([...users, formData]))
        .catch(err => err);
      setUserData({
        name: "",
        bio: ""
      });
      return <Redirect to="/read" />;
    } else {
      return alert("Must provide a Name and Bio.");
    }
  };
  return (
    <div className="App">
      <CardList users={users} setUsers={setUsers} />
      <UserForm
        setUserData={setUserData}
        userData={userData}
        setUsers={setUsers}
        addStory={addStory}
      />
    </div>
  );
}

export default App;
