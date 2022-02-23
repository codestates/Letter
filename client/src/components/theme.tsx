import React from "react";
import styled from "styled-components";
import mainImage from "../images/basic.jpg";

const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  position: relative;
  background-image: url(${mainImage});
  background-size: cover;
  color: white;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Content = styled.div`
  font-size: 6rem;
  font-family: "Handletter";
  @media (max-width: 768px) {
    width: 55%;
    font-size: 3rem;
    display: flex;
    margin-top: 130px;
  }
`;

function Theme() {
  return (
    <BackgroundContainer>
      <Content> &quot;당신의 아날로그 감성을 깨우세요.&quot;</Content>
    </BackgroundContainer>
  );
}

export default Theme;
