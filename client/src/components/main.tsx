import React from "react";
import styled from "styled-components";
import mainImage from "../images/basic.jpg";

const BackgroundContainer = styled.img`
  width: 100%;
  height: 50vmax;
  flex-direction: column;
  display: flex;
  align-items: center;
  overflow-y: auto;
`;

function Main() {
  return (
    <div>
      <BackgroundContainer src={mainImage} />
    </div>
  );
}

export default Main;
