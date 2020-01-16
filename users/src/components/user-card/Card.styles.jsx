import styled, { css } from "styled-components";

// export const CardContainer = styled.div`
//   position: relative;
//   z-index: 1;
//   margin: 32px auto;
//   max-width: 720px;
//   height: 420px;
//   perspective: 1000px;
//   .card-body {
//     width: 100%;
//     height: 100%;
//     transform-style: preserve-3d;
//     transition: all 0.7s linear;

//     :hover {
//       transform: rotateY(180deg);
//     }
//   }
// `;

// export const CardBody = styled.div``;

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

// Flipping card
export const Card = styled.article`
  display: flex;
  margin: 5% auto;
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.7),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
  border-radius: 5%;
  width: 33%;
  text-align: center;
  min-height: 20rem;
  cursor: pointer;
  perspective: 1000px;
  transition: all 0.75s ease-in-out;

  &:focus,
  &:hover {
    box-shadow: 0 0 6rem rgb(163, 177, 198, 0.6);
  }

  &.flipped {
    & > div:first-of-type {
      transform: perspective(1000px) rotateY(-180deg);
    }

    & > div:last-of-type {
      // backside of the card
      transform: perspective(1000px) rotateY(0deg);
    }
  }
`;

// Card sides
export const CardSide = css`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: all 0.75s ease-in-out;
`;

// Card side - front
export const CardFront = styled.div`
  ${CardSide};
  justify-content: flex-end;
  align-items: flex-end;
  font-weight: bold;
  text-align: center;
`;

// Card side - back
export const CardBack = styled.div`
  ${CardSide};

  transform: rotateY(-180deg);
`;

// Card content
export const CardNumber = styled.span`
  display: block;
  font-size: ${remy(24)};
`;

export const CardTitle = styled.h2`
  font-size: 1.6rem;
  padding: 5% 10%;
`;

export const CardDescription = styled.span`
  font-size: ${remy(16)};
`;
