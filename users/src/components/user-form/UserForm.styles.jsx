import styled, { css } from "styled-components";

// export const FormContainer = styled.div`
//   position: relative;
//   z-index: 1;
//   margin: 32px auto;
//   max-width: 720px;
//   height: 420px;
//   perspective: 1000px;
//   .Form-body {
//     width: 100%;
//     height: 100%;
//     transform-style: preserve-3d;
//     transition: all 0.7s linear;

//     :hover {
//       transform: rotateY(180deg);
//     }
//   }
// `;

// export const FormBody = styled.div``;

// Helper function to convert pixels to rems (remy)
export const remy = px => `${px / 16}rem`;

// Function for calculating value for width
export const getWidth = value => {
  if (!value) return;

  let width = (value / 12) * 100;
  return `width: ${width}%;`;
};

// Function for calculating value for flex
export const getFlex = value => {
  if (!value) return;

  let flex = (value / 12) * 100;
  return `flex: 0 0 ${flex}%;`;
};

// Flipping Form
export const Form = styled.article`
  display: flex;
  justify-content: center;
  margin: 20% auto;
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
  border-radius: 5%;
  width: 33%;
  text-align: center;
  min-height: 20rem;
  perspective: 1000px;
  transition: all 1s ease-in-out;

  &:focus,
  &:hover {
    box-shadow: 0 0 6rem rgba(0, 0, 0, 0.15);
  }

  &.flipped {
    //front side of the Form
    & > div:first-of-type {
      transform: perspective(1000px) rotateY(-180deg);
    }

    & > div:last-of-type {
      // backside of the Form
      transform: perspective(1000px) rotateY(0deg);
    }
  }
`;

// Form sides
export const FormSide = css`
  position: absolute;
  top: 0;
  left: 5;
  overflow: hidden;
  padding: 5%;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: all 1s ease-in-out;
`;

// Form side - front
export const FormFront = styled.div`
  ${FormSide};
  justify-content: flex-end;
  align-items: flex-end;
  font-weight: bold;
  text-align: center;
`;

// Form side - back
export const FormBack = styled.div`
  ${FormSide};
  display: flex;
  justify-content: center;
  margin: 0 auto;
  transform: rotateY(-180deg);
`;

// Form content

export const FormTitle = styled.h2`
  font-size: 1.6rem;
  padding: 5% 10%;
  cursor: pointer;
`;

export const FormInput = styled.input`
  font-size: 1.2rem;
  width: 60%;
  margin: 2% auto;
`;

export const StyledButton = styled.button`
  width: 33%;
  margin: 5% auto;
  height: 30px;
  border: none;
  border-radius: 5%;
  background-color: rgba(54, 69, 79, 0.808);
  color: #e0e5ec;
`;
