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

function UserForm({ setUserData, userData, addStory }) {
  const [flipped, setFlipped] = useState(false);
  const [tempUserData, setTempUserData] = useState(false);
  const handleClick = () => {
    setFlipped(!flipped);
  };

  // const [userData, setUserData] = useState({
  //   name: "",
  //   bio: ""
  // });

  const handleChanges = e => {
    setTempUserData({
      ...tempUserData,
      [e.target.name]: e.target.value
    });
  };
  console.log(addStory);
  const handleSubmit = tempUserData => {
    console.log(`CLICKEKDKDKDKALGAJHGAKHG;AKHGKUALH`);
    setUserData(tempUserData);
    addStory(tempUserData);
    setUserData({
      name: "",
      bio: ""
    });
    setFlipped(!flipped);
    return <Redirect to="/read" />;
    // if (userData.name !== "" && userData.bio !== "") {
    //   axios
    //     .post(`http://localhost:4000/api/users`, userData)
    //     .then(res => console.log(res))
    //     .catch(err => err);
    //   setUserData({
    //     name: "",
    //     bio: ""
    //   });
    //   setFlipped(!flipped);
    // } else {
    //   return alert("Must provide a Name and Bio.");
    // }
  };

  return (
    <div classname={flipped === true ? "flipped" : ""}>
      <Form onSubmit={handleSubmit} className={flipped && "flipped"}>
        <FormFront>
          <FormTitle onClick={() => setFlipped(!flipped)}>
            Add a Story
          </FormTitle>
        </FormFront>

        <FormBack>
          <FormTitle onClick={() => setFlipped(!flipped)}>
            Tell Us A Story
          </FormTitle>
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
          <StyledButton onClick={() => handleSubmit(tempUserData)}>
            button
          </StyledButton>
        </FormBack>
      </Form>
    </div>
  );
}

export default UserForm;
