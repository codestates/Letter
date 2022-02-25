import styled from "styled-components";
import mainImage from "../images/basic.jpg";
import FemaleLogo from "../images/defaultImage-f.png";
// import MaleLogo from "../images/defaultImage-m.png";

const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow-y: auto;
  position: relative;
  background-size: cover;
  color: white;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BackgroundImg = styled.div`
  width: 40%;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow-y: auto;
  position: relative;
  background-image: url(${mainImage});
  background-size: cover;
  background-position: center;
  color: white;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MypageText = styled.div`
  color: white;
  position: absolute;
  bottom: 40px;
  width: 45%;
  height: 7%;
  font-size: 5vw;
  font-weight: bold;
`;

const Container = styled.div`
  width: 60%;
  height: 100%;
`;

const ProfileContainer = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 40vh;
  display: flex;
`;

const ProfileImgContainer = styled.img`
  width: 30%;
  height: 50%;
  margin-left: 45px;
  margin-top: 140px;
  flex-direction: column-reverse;
`;

const ProfileContentContainer = styled.div`
  width: 60%;
  height: 30%;
  padding: 135px 20px;
`;

const LogoutBtn = styled.button`
  width: 52px;
  height: 20px;
  border-radius: 100px;
  font-size: 10px;
  margin-left: 280px;
  border: 0;
  outline: 0;
  cursor: pointer;
  background-color: #ab8643;
  color: rgb(252, 251, 251);
`;
const NicknameContainer = styled.div`
  height: 20px;
  padding: 0px 35px;
  margin-top: 30px;
  font-size: 15px;
  color: #ab8643;
`;

const EmailContainer = styled.div`
  height: 20px;
  padding: 0px 35px;
  margin-top: 3px;
  font-size: 15px;
  color: #ab8643;
`;

const PasswordContainer = styled.div`
  height: 20px;
  padding: 0px 35px;
  margin-top: 3px;
  font-size: 15px;
  color: #ab8643;
`;

const ButtonContainer = styled.div`
  height: 30px;
  margin-top: 40px;
  margin-left: -20px;
  display: flex;
`;

const EditProfileBtn = styled.button`
  height: 32px;
  width: 122px;
  font-size: 14px;
  cursor: pointer;
  background-color: #ab8643;
  color: rgb(252, 251, 251);
  line-height: 1px;
  border: 1px solid #ab8643;
  border-radius: 5px;
  border-style: none;
`;

const QuitBtn = styled.button`
  height: 32px;
  width: 122px;
  font-size: 14px;
  cursor: pointer;
  background-color: rgb(252, 251, 251);
  color: #ab8643;
  line-height: 1px;
  margin-left: 20px;
  border-radius: 5px;
  border: 1px solid #ab8643;
  outline: 0;
`;

const MypostContainer = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 60vh;
`;

function Mypage() {
  return (
    <div>
      <BackgroundContainer>
        <BackgroundImg>
          <MypageText>MYPAGE</MypageText>
        </BackgroundImg>
        <Container>
          <ProfileContainer>
            <ProfileImgContainer src={FemaleLogo}></ProfileImgContainer>
            <ProfileContentContainer>
              <LogoutBtn>로그아웃</LogoutBtn>
              <NicknameContainer>손편지소녀</NicknameContainer>
              <EmailContainer>letter123@letter.com</EmailContainer>
              <PasswordContainer>비밀번호: ********</PasswordContainer>
              <ButtonContainer>
                <EditProfileBtn>프로필 편집</EditProfileBtn>
                <QuitBtn>회원 탈퇴</QuitBtn>
              </ButtonContainer>
            </ProfileContentContainer>
          </ProfileContainer>
          <MypostContainer></MypostContainer>
        </Container>
      </BackgroundContainer>
    </div>
  );
}

export default Mypage;
