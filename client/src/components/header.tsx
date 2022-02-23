import React from "react";
import styled from "styled-components";
import logo from "../images/logo_letter.svg";
import { Link } from "react-router-dom";
import defaultImage from "../images/defaultImage-f.png";
import { Iprops } from "../app";

const Container = styled.div`
  width: 100%;
  height: 6rem;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
`;

const LeftContainer = styled.div`
  width: 30%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const Logo = styled.img`
  widgh: 50px;
  height: 30px;
  margin-right: 15px;
  cursor: pointer;
`;

const LetterBtn = styled.button`
  width: 55px;
  height: 30px;
  font-size: 11px;
  font-family: "Noto Sans KR";
  cursor: pointer;
  background-color: rgba(171, 134, 67, 1);
  color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  border-style: none;
  &:hover {
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(171, 134, 67, 1);
    color: rgba(171, 134, 67, 1);
  }
`;

const RightContainer = styled.div`
  width: 50%;
  height: 2rem;
  display: flex;
  justify-content: end;
  align-item: center;
`;

const LoginBtn = styled.button`
  width: 55px;
  height: 30px;
  font-size: 11px;
  font-family: "Noto Sans KR";
  cursor: pointer;
  background-color: rgba(171, 134, 67, 1);
  color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  border-style: none;
  &:hover {
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(171, 134, 67, 1);
    color: rgba(171, 134, 67, 1);
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover {
    & > div {
      display: block;
    }
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #fffcfb;
  min-width: 125px;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownContentText = styled.div`
  color: #ab8643;
  padding: 15px 25px;
  text-decoration: none;
  font-family: "Noto Sans KR";
  display: block;
  cursor: pointer;
  &:hover {
    background-color: #ab8643;
    color: #fffcfb;
  }
`;

const Avartar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-left: 60px;
  cursor: pointer;
`;

function Header(
  isLogin: Iprops["isLogin"],
  handleLogout: Iprops["handleLogout"]
) {
  return (
    <div>
      <Container>
        <LeftContainer>
          <Link to="/">
            <Logo src={logo} />
          </Link>
          <LetterBtn>편지쓰기</LetterBtn>
        </LeftContainer>
        <RightContainer>
          {!isLogin ? (
            <Link to="/login">
              <LoginBtn>로그인</LoginBtn>
            </Link>
          ) : (
            <Dropdown>
              <Avartar src={defaultImage}></Avartar>
              <DropdownContent>
                <DropdownContentText>
                  <Link
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    to={{ pathname: "/mypage" }}
                  >
                    마이페이지
                  </Link>
                </DropdownContentText>
                <DropdownContentText onClick={handleLogout}>
                  <Link
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    to={{ pathname: "/" }}
                  >
                    로그아웃
                  </Link>
                </DropdownContentText>
              </DropdownContent>
            </Dropdown>
          )}
        </RightContainer>
      </Container>
    </div>
  );
}

export default Header;