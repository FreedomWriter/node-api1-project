import React from "react";
import "./App.css";
import UserForm from "./components/user-form/UserForm.component";
import UserCard from "./components/user-card/Card.component";
import CardList from "./components/user-card/CardList.component";

function App() {
  return (
    <div className="App">
      <UserForm />
      <CardList />
    </div>
  );
}

export default App;
