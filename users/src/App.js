import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import UserForm from "./components/user-form/UserForm.component";
import UserCard from "./components/user-card/Card.component";
import CardList from "./components/user-card/CardList.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <UserForm />
        </Route>
        <Route path="/read">
          <CardList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
