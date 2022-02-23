import styled from "styled-components";
import image3 from "../images/Select.svg";

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

const Container_1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
  width: 30vmax;
  height: 95vh;
  font-family: "Noto Sans KR";
  font-size: 2rem;
  color: #455a64;
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

const ContainerText_a = styled.div`
  width: 30vmax;
  height: 5vh;
  @media (max-width: 1440px) {
    width: 100%;
    font-size: 1.5rem;
    margin-left: 90px;
    height: 5vh;
  }
  @media (max-width: 768px) {
    width: 80%;
    font-size: 1.5rem;
    margin-left: 0px;
  }
`;

const ContainerText_b = styled.div`
  width: 30vmax;
  height: 8vh;
  font-size: 3rem;
  font-weight: bold;
  @media (max-width: 1440px) {
    width: 100%;
    font-size: 2rem;
    margin-left: 90px;
    height: 5vh;
  }
  @media (max-width: 768px) {
    width: 80%;
    font-size: 2rem;
    height: 4vh;
    margin-left: 0px;
  }
`;

const ContainerText_c = styled.div`
  width: 30vmax;
  height: 14vh;
  font-size: 3rem;
  font-weight: bold;
  @media (max-width: 1440px) {
    width: 100%;
    font-size: 2rem;
    margin-left: 90px;
  }
  @media (max-width: 768px) {
    width: 80%;
    font-size: 2rem;
    height: 10vh;
    margin-left: 0px;
  }
`;

const ContainerText_d = styled.div`
  width: 30vmax;
  height: 10vh;
  font-size: 1rem;
  color: #747171;
  @media (max-width: 1440px) {
    width: 100%;
    font-size: 0.9rem;
    margin-left: 90px;
    height: 7vh;
  }
  @media (max-width: 768px) {
    width: 80%;
    font-size: 0.9rem;
    height: 10vh;
    margin-left: 0px;
  }
`;

const ContainerImage = styled.img`
  width: 35vmax;
  height: 75vh;
  @media (max-width: 768px) {
    margin-top: 100px;
    height: 50%;
  }
`;

function LandingTheme_c() {
  return (
    <BackgroundContainer1>
      <ContainerImage src={image3} />
      <Container_1>
        <ContainerText_a>#1.</ContainerText_a>
        <ContainerText_b>편지 목적에 맞는</ContainerText_b>
        <ContainerText_c>템플릿을 선택하세요.</ContainerText_c>
        <ContainerText_d>
          편지 작성이 어려우신 분들을 위해 기본적인 템플릿이 제공됩니다.
        </ContainerText_d>
      </Container_1>
    </BackgroundContainer1>
  );
}

export default LandingTheme_c;
