import styled from "styled-components";
import mainImage from "../images/basic.jpg";
import Letterlogo from "../images/logo_letter.svg";

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

const SignupContainer = styled.div`
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

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  height: 10%;
`;

const EmailInput = styled.input.attrs({
  placeholder: "이메일을 입력해 주세요",
  type: "email",
})`
  margin-top: 10px;
  border-radius: 2px;
  width: 70%;
  height: 40px;
  border: 1px solid #e5e5e5;
  padding: 9px 12px;
  outline: none;
  box-sizing: border-box;
`;

const ValidationBtn = styled.button`
  height: 35px;
  width: 20%;
  font-size: 14px;
  padding: 13px 30px;
  cursor: pointer;
  background-color: #ab8643;
  color: rgb(252, 251, 251);
  line-height: 1px;
  margin-top: 20px;
  margin-bottom: 12px;
  margin-left: 10px;
  border-radius: 3px;
  border-style: none;
`;

const Password = styled.input.attrs({
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

const PasswordCheck = styled.input.attrs({
  placeholder: "비밀번호확인",
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

function Signup() {
  console.log("Signup");
  return (
    <div>
      <BackgroundContainer>
        <SignupContainer>
          <Container>
            <TextContainer>
              <LoginLogo src={Letterlogo} />
              <EmailContainer>
                <EmailInput />
                <ValidationBtn>중복확인</ValidationBtn>
              </EmailContainer>
              <Password />
              <PasswordCheck />
            </TextContainer>
          </Container>
        </SignupContainer>
      </BackgroundContainer>
    </div>
  );
}

export default Signup;
