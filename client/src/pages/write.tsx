import React, { useState } from "react";
import styled from "styled-components";
import basic2 from "../images/basic2.png";
import one from "../images/1.jpeg";
import two from "../images/2.jpeg";
import three from "../images/3.png";
import four from "../images/4.jpeg";
import five from "../images/5.png";

type Letter = {
  name: string;
  src: string;
};

const TopContainer = styled.img`
  width: 100%;
  height: 160px;
`;

const BackgroundContainer = styled.div`
  width: 100%;
  // height: 100vh;
  background-color: #fffcfb;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

const RadioContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 100px;
  @media (max-width: 768px) {
    width: 100%;
    height: 700px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 200px));
  }
`;

const Letter: Letter[] = [
  { name: "first", src: one },
  { name: "two", src: two },
  { name: "three", src: three },
  { name: "four", src: four },
  { name: "five", src: five },
];

const Label = styled.label`
  width: 150px;
  height: 200px;
  display: inline-block;
`;

const RadioBtn = styled.input.attrs({ type: "radio" })`
  display: none;
  &:checked + ${Label} {
    outline: 2px solid rgba(171, 134, 67, 0.7);
  }
`;

const Image = styled.img`
  height: 200px;
  width: 150px;
`;

const FontContainer = styled.div`
  width: 100%;
  height: 100px;
  padding-top: 50px;
  flex-direction: row;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const FontContentContainer = styled.div`
  width: 280px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FontContent = styled.select`
  width: 140px;
  height: 35px;
  border: 1px solid #ab8643;
  border-radius: 8px;
  color: #ab8643;
`;

const FontSizeContent = styled.input.attrs({
  placeholder: "글자크기",
  type: "number",
  min: "8",
  max: "96",
})`
  width: 100px;
  height: 30px;
  border: 1px solid #ab8643;
  border-radius: 8px;
  background-color: white;
  display: flex;
  align-items: center;
  color: #ab8643;
`;

// const FontSizePlusMinus = styled.div`
//   height: 25px;
//   width: 20px;
//   color: white;
//   cursor: pointer;
//   text-align: center;
//   padding-top: 12px;
//   padding-left: 3px;
// `;

// const FontSizeText = styled.div`
//   width: 50px;
//   font-size: 0.9rem;
//   color: white;
//   text-align: center;
// `;

const LetterContainer = styled.img`
  border: 1px solid blue;
  width: 700px;
  height: 900px;
  @media (max-width: 768px) {
    width: 90%;
    height: 700px;
  }
`;
const BtnContainer = styled.div`
  width: 500px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const PreviewBtn = styled.button`
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
  @media (max-width: 768px) {
    width: 90px;
    height: 40px;
    font-size: 15px;
  }
`;

const SaveBtn = styled.button`
  width: 130px;
  height: 50px;
  font-size: 19px;
  font-family: "Noto Sans KR";
  cursor: pointer;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(171, 134, 67, 1);
  border-radius: 5px;
  border: 1px solid rgba(171, 134, 67, 1);
  &:hover {
    background-color: rgba(171, 134, 67, 1);
    border: 1px solid rgba(255, 255, 255, 1);
    color: rgba(255, 255, 255, 1);
  }
  @media (max-width: 768px) {
    width: 90px;
    height: 40px;
    font-size: 15px;
  }
`;

// const handleClick = (name: string | undefined) => {
//   const selectedLetter = Letter.filter((letter) => letter.name === name);
//   <LetterContainer src={selectedLetter} />;
// };

function Write() {
  const [checked, setChecked] = useState(one);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { src: any } }) => {
    setChecked(e.target.src);
  };
  return (
    <div>
      <TopContainer src={basic2} />
      <BackgroundContainer>
        <RadioContainer>
          {Letter.map((letter) => (
            <div key={letter.name}>
              <RadioBtn
                id={letter.name}
                name="letter-selector"
                value={letter.name}
                onChange={handleChange}
              />
              <Label htmlFor={letter.name}>
                <Image src={letter.src} />
              </Label>
            </div>
          ))}
        </RadioContainer>
        <FontContainer>
          <FontContentContainer>
            <FontContent>
              <option value="Handletter">손편지</option>
              <option value="SangSangShin">상상신과장</option>
            </FontContent>
          </FontContentContainer>
          <FontSizeContent>
            {/* <FontSizePlusMinus>+</FontSizePlusMinus>
            <FontSizeText>글자크기</FontSizeText>
            <FontSizePlusMinus>-</FontSizePlusMinus> */}
          </FontSizeContent>
        </FontContainer>
        <LetterContainer></LetterContainer>
        <BtnContainer>
          <PreviewBtn>미리보기</PreviewBtn>
          <SaveBtn>저장</SaveBtn>
        </BtnContainer>
      </BackgroundContainer>
    </div>
  );
}

export default Write;
