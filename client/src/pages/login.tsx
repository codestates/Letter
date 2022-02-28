import styled from "styled-components";
import mainImage from "../images/basic.jpg";
import Letterlogo from "../images/logo_letter.svg";
import Googlelogo from "../images/google_logo.png";
import Kakaologo from "../images/kakao_logo.jpeg";
import { Link } from "react-router-dom";

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
  overflow-x: hidden;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LoginContainer = styled.div`
  width: 450px;
  height: 760px;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex column;
  align-items: center;
  width: 380px;
  height: 550px;
  background-color: rgb(252, 251, 251);
  box-shadow: 0 0 5px rgb(212, 212, 212);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  border-radius: 15px;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const LoginLogo = styled.img`
  width: 40%;
  margin: 7%;
`;

const LoginId = styled.input.attrs({ placeholder: "이메일", type: "email" })`
  margin-top: 10px;
  border-radius: 2px;
  width: 60%;
  height: 40px;
  border: 1px solid #e5e5e5;
  padding: 9px 12px;
  outline: none;
  box-sizing: border-box;
`;

const LoginPw = styled.input.attrs({
  placeholder: "비밀번호",
  type: "password",
})`
  margin-top: 10px;
  border-radius: 2px;
  width: 60%;
  height: 40px;
  border: 1px solid #e5e5e5;
  padding: 9px 12px;
  outline: none;
  box-sizing: border-box;
`;

const LoginBtn = styled.button`
  height: 40px;
  width: 200px;
  font-size: 14px;
  padding: 13px 30px;
  cursor: pointer;
  background-color: #ab8643;
  color: rgb(252, 251, 251);
  line-height: 1px;
  margin-top: 15px;
  margin-bottom: 12px;
  border-radius: 3px;
  border-style: none;
  &:hover {
    background-color: #fffcfb;
    color: #ab8643;
    border: 1px solid #ab8643;
  }
`;

const GoogleLoginBtn = styled.button`
  height: 40px;
  width: 60%;
  font-size: 14px;
  padding: 13px 30px;
  background-color: white;
  cursor: pointer;
  line-height: 1px;
  margin-top: 30px;
  margin-bottom: 7px;
  border-radius: 3px;
  border-style: none;
  border: 1px solid rgba(222, 222, 222, 1);
  vertical-align: middle;
  &:hover {
    background-color: #f1eee7;
  }
`;

const GoogleImg = styled.img`
  width: 5%;
  position: absolute;
  margin-top: -10px;
  margin-left: -40px;
`;

const KakaoLoginBtn = styled.button`
  height: 40px;
  width: 60%;
  font-size: 14px;
  padding: 13px 30px;
  background-color: white;
  cursor: pointer;
  line-height: 1px;
  margin-bottom: 12px;
  border-radius: 3px;
  border-style: none;
  border: 1px solid rgba(222, 222, 222, 1);
  &:hover {
    background-color: #f1eee7;
  }
`;

const KakaoImg = styled.img`
  width: 5%;
  position: absolute;
  margin-top: -10px;
  margin-left: -34px;
`;

const SignupBtn = styled.button`
  height: 40px;
  width: 200px;
  font-size: 14px;
  padding: 13px 30px;
  cursor: pointer;
  background-color: rgb(252, 251, 251);
  color: #ab8643;
  line-height: 1px;
  margin-top: 20px;
  margin-bottom: 12px;
  border-radius: 3px;
  border-style: none;
  border: 1px solid #ab8643;
  &:hover {
    background-color: #ab8643;
    color: #fffcfb;
  }
`;

function Login() {
  return (
    <div>
      <BackgroundContainer>
        <LoginContainer>
          <Container>
            <TextContainer>
              <LoginLogo src={Letterlogo} />
              <LoginId />
              <LoginPw />
              <LoginBtn>로그인</LoginBtn>
              <GoogleLoginBtn>
                <GoogleImg src={Googlelogo} />
                구글 로그인하기
              </GoogleLoginBtn>
              <KakaoLoginBtn>
                <KakaoImg src={Kakaologo} />
                카카오 로그인하기
              </KakaoLoginBtn>
              <Link to="/signup">
                <SignupBtn>회원가입</SignupBtn>
              </Link>
            </TextContainer>
          </Container>
        </LoginContainer>
      </BackgroundContainer>
    </div>
  );
}

export default Login;
