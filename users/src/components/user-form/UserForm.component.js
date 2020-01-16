import React, { useState, useEffect } from "react";
import { useHistory, Redirect } from "react-router";

import axios from "axios";

import {
  Form,
  FormFront,
  FormTitle,
  FormBack,
  FormInput,
  StyledButton
} from "./UserForm.styles";

function UserForm() {
  const [flipped, setFlipped] = useState(true);
  const handleClick = () => {
    setFlipped(!flipped);
  };

  const [userData, setUserData] = useState({
    name: "",
    bio: ""
  });

  const handleChanges = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log(`CLICKEKDKDKDKALGAJHGAKHG;AKHGKUALH`);
    if (userData.name !== "" && userData.bio !== "") {
      axios
        .post(`http://localhost:4000/api/users`, userData)
        .then(res => console.log(res))
        .catch(err => err);
      setUserData({
        name: "",
        bio: ""
      });

      // return <Redirect to="/read"/>
    } else {
      return alert("Must provide a Name and Bio.");
    }
  };

  return (
    <div classname={flipped === true ? "flipped" : ""}>
      {/* <GridRow>
        <GridColumn sm="3" lg="2"> */}
      <Form onSubmit={handleSubmit} className={flipped && "flipped"}>
        <FormFront>
          <FormTitle>Add a Story</FormTitle>
        </FormFront>

        <FormBack>
          <FormTitle>Tell Us A Story</FormTitle>
          <FormInput
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={handleChanges}
          />
          <FormInput
            type="text"
            name="bio"
            id="bio"
            placeholder="Bio"
            onChange={handleChanges}
          />
          <StyledButton onClick={handleSubmit}>button</StyledButton>
        </FormBack>
      </Form>
      {/* </GridColumn>
      </GridRow> */}
    </div>
  );
}

export default UserForm;
