import React from "react";
import styled from "styled-components";
import logo from "../images/logo_letter.svg";
import github from "../images/githublogo.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: rgba(171, 134, 67, 0.2);
  width: 100%;
  height: 160px;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// const Wrapper = styled.div`
//   height: auto;
//   min-height: 100%;
//   padding-bottom: 10rem;
// `;

const LeftContainer = styled.div`
  width: 60%;
  height: 160px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Logo = styled.img`
  width: 80px;
  height: 160px;
  margin-left: 120px;
`;

const Content = styled.div`
  width: 600px;
  height: 160px;
  color: #ab8643;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const ServiceContainer = styled.div`
  width: 1900px;
  height: 110px;
  color: #ab8643;
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
`;

const ServiceContent = styled.div`
  width: 60px;
  height: 2rem;
`;

const ServiceImage = styled.img`
  width: 30px;
  height: 2rem;
  cursor: pointer;
`;

const AboutContainer = styled.div`
  width: 1200px;
  height: 110px;
  color: #ab8643;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const AboutTitle = styled.div`
  width: 70px;
  height: 16px;
  font-weight: bold;
`;

const AboutContent = styled.div`
  width: 70px;
  height: 90px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  font-size: 14px;
`;

const AboutContent_a = styled.div`
  width: 45px;
  height: 32px;
  cursor: pointer;
`;

const AboutContent_b = styled.div`
  width: 45px;
  height: 32px;
  cursor: pointer;
`;

const AboutContent_c = styled.div`
  width: 45px;
  height: 32px;
  cursor: pointer;
`;

const AboutContent_d = styled.div`
  width: 45px;
  height: 32px;
  cursor: pointer;
`;

function Footer() {
  return (
    <>
      <Container>
        <LeftContainer>
          <Logo src={logo} />
          <Content>© 2022 Copyright Letter Inc. All rights reserved.</Content>
        </LeftContainer>
        <ServiceContainer>
          <ServiceContent>Service</ServiceContent>
          <ServiceImage src={github} />
        </ServiceContainer>
        <AboutContainer>
          <AboutTitle>About us</AboutTitle>
          <AboutContent>
            <AboutContent_a>윤주봉</AboutContent_a>
            <AboutContent_b>심민재</AboutContent_b>
            <AboutContent_c>임정환</AboutContent_c>
            <AboutContent_d>정주영</AboutContent_d>
          </AboutContent>
        </AboutContainer>
      </Container>
    </>
  );
}

export default Footer;
