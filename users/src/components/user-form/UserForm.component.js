import React, { useState } from "react";
import { useHistory } from "react-router";

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

  //   const history = useHistory();

  const onButtonClick = () => {
    console.log(`CLICKEKDKDKDKALGAJHGAKHG;AKHGKUALH`);
  };

  return (
    <div classname={flipped === true ? "flipped" : ""}>
      {/* <GridRow>
        <GridColumn sm="3" lg="2"> */}
      <Form onClick={handleClick} className={flipped && "flipped"}>
        <FormFront>
          <FormTitle>Add a Story</FormTitle>
        </FormFront>

        <FormBack>
          <FormTitle>Tell Us A Story</FormTitle>
          <FormInput type="text" name="text" id="text" placeholder="Name" />
          <FormInput type="text" name="text" id="text" placeholder="Bio" />
          <StyledButton onClick={onButtonClick}>button</StyledButton>
        </FormBack>
      </Form>
      {/* </GridColumn>
      </GridRow> */}
    </div>
  );
}

export default UserForm;
