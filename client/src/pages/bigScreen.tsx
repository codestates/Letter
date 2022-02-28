// 크게보기(Modal)
import React from "react";
import styled from "styled-components";
import Headerimg from "../images/header.png";
import { Link } from "react-router-dom";
import BsLetter from "../components/bsLetter";

const HeaderContainer = styled.div`
  width: 100%;
  height: 70vh;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  position: relative;
  background-image: url(${Headerimg});
  background-size: cover;
  color: white;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Bigsc = styled.div`
  width: 100%;
  height: 100%;
  margin-right: 30px;
  margin-left: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
`;
function BigScreen(props: any) {
  // const SimpleComponent = props => {
  //   const { printRef } = props;
  // };
  return (
    <div>
      <HeaderContainer />
      <Bigsc>
        <BsLetter />
      </Bigsc>
    </div>
  );
}
export default BigScreen;
