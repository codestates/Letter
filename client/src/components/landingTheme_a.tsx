import styled from "styled-components";
import image1 from "../images/Texting.svg";

const BackgroundContainer1 = styled.div`
  width: 100vw;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  background-color: #fffcfb;
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
  flex-direction: column;
  justify-content: center;
  width: 50vmax;
  height: 45vh;
  font-family: "Noto Sans KR";
  font-size: 4rem;
  font-weight: bold;
  color: #455a64;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    height: 20vh;
    flex-direction: column;
  }
`;

const ContainerText_a = styled.div`
  width: 700px;
  height: 9vh;
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

const ContainerText_b = styled.div`
  width: 700px;
  height: 9vh;
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
  width: 800px;
  height: 9vh;
  margin-left: 95px;
  @media (max-width: 1440px) {
    width: 100%;
    font-size: 2rem;
    height: 7vh;
  }
  @media (max-width: 768px) {
    width: 80%;
    font-size: 2rem;
    height: 5vh;
    margin-left: 0px;
  }
`;

// const Container_2 = styled.div`
//   width: 50vmax;
//   height: 65vh;
//   border: 1px solid red;
// `;

const ContainerImage = styled.img`
  width: 50vmax;
  height: 65vh;
  @media (max-width: 768px) {
    width: 100%;
    height: 40vh;
    margin-left: 0px;
  }
`;

function LandingTheme_a() {
  return (
    <BackgroundContainer1>
      {/* <CardWapper> */}
      <Container_1>
        <ContainerText_a>디지털 시대에 지친</ContainerText_a>
        <ContainerText_b>여러분의</ContainerText_b>
        <ContainerText_c>아날로그 감성을 찾아드려요.</ContainerText_c>
      </Container_1>
      {/* </CardWapper> */}
      {/* <Container_2> */}
      <ContainerImage src={image1} />
      {/* </Container_2> */}
    </BackgroundContainer1>
  );
}

export default LandingTheme_a;
