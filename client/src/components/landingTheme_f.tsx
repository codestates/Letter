import styled from "styled-components";

const BackgroundContainer1 = styled.div`
  width: 100vw;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  background-color: #cec1bb;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95vh;
    margin-left: 0px;
    flex-direction: column;
  }
`;

const Container = styled.div`
  width: 500px;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Noto Sans KR";
  color: #455a64;
  @media (max-width: 768px) {
    width: 100%;
    height: 40vh;
    font-size: 50px;
  }
`;

const Content = styled.div`
  width: 550px;
  height: 150px;
  font-weight: bold;
  font-size: 4rem;
  @media (max-width: 768px) {
    width: 100%;
    height: 17vh;
    font-size: 55px;
  }
`;

const BtnContainer = styled.div`
  width: 550px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StartBtn = styled.button`
  width: 130px;
  height: 50px;
  font-size: 19px;
  font-family: "Noto Sans KR";
  cursor: pointer;
  background-color: rgba(171, 134, 67, 1);
  color: rgba(255, 255, 255, 1);
  border-radius: 5px;
  border-style: none;
  &:hover {
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(171, 134, 67, 1);
    color: rgba(171, 134, 67, 1);
  }
`;

function LandingTheme_f() {
  return (
    <BackgroundContainer1>
      <Container>
        <Content>&nbsp;&nbsp;이제 시작해보세요.</Content>
        <BtnContainer>
          <StartBtn>시작하기</StartBtn>
        </BtnContainer>
      </Container>
    </BackgroundContainer1>
  );
}

export default LandingTheme_f;
