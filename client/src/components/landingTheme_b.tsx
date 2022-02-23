import styled from "styled-components";
import image2 from "../images/Envelope.svg";

const BackgroundContainer1 = styled.div`
  width: 100vw;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: start;
  overflow-y: auto;
  background-color: rgba(171, 134, 67, 0.7);
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95vh;
    margin-left: 0px;
  }
`;

const Container_1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 95vh;
  font-family: "Noto Sans KR";
  font-size: 1.5rem;
  color: #455a64;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    flex-direction: column;
  }
`;

const ContainerText_a = styled.div`
  width: 600px;
  height: 3.5vh;
  margin-top: 30px;
  @media (max-width: 768px) {
    width: 70%;
    font-size: 0.9rem;
    height: 4vh;
    margin-left: 0px;
  }
`;

const ContainerText_b = styled.div`
  width: 680px;
  height: 3.5vh;
  @media (max-width: 768px) {
    width: 80%;
    font-size: 0.9rem;
    height: 4vh;
    margin-left: 0px;
  }
`;

const ContainerImage = styled.img`
  width: 35vmax;
  height: 65vh;
  @media (max-width: 768px) {
    width: 70%;
    margin-left: 0px;
  }
`;

function LandingTheme_b() {
  return (
    <BackgroundContainer1>
      <Container_1>
        <ContainerImage src={image2} />
        <ContainerText_a>
          진심이 담긴 한 장의 손편지를 받아보신 적 있으신가요?
        </ContainerText_a>
        <ContainerText_b>
          디지털이지만 마치 아날로그적인 방식으로 마음을 표현해보세요.
        </ContainerText_b>
      </Container_1>
    </BackgroundContainer1>
  );
}

export default LandingTheme_b;
