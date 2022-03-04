import React, { useState } from "react";
import styled from "styled-components";
import basic2 from "../images/basic2.png";
import one from "../images/1.png";
import two from "../images/2.jpeg";
import three from "../images/3.png";
import four from "../images/4.png";
import five from "../images/5.jpg";
import { fontList } from "../font/fontList";

type Letter = {
  name: string;
  src: string;
};

const Letter: Letter[] = [
  { name: "first", src: one },
  { name: "two", src: two },
  { name: "three", src: three },
  { name: "four", src: four },
  { name: "five", src: five },
];

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

// const FontSizeContent = styled.input.attrs({
//   placeholder: "글자크기",
//   type: "number",
//   min: "8",
//   max: "96",
// })`
//   width: 100px;
//   height: 30px;
//   border: 1px solid #ab8643;
//   border-radius: 8px;
//   background-color: white;
//   display: flex;
//   align-items: center;
//   color: #ab8643;
// `;

const FontSizeContent = styled.div`
  width: 100px;
  height: 30px;
  background-color: #ab8643;
  display: flex;
  align-items: center;
`;

const FontSizePlusMinus = styled.div`
  height: 25px;
  width: 20px;
  color: white;
  cursor: pointer;
  text-align: center;
  padding-top: 12px;
  padding-left: 3px;
`;

const FontSizeText = styled.div`
  width: 50px;
  height: px;
  font-size: 0.9rem;
  color: white;
  text-align: center;
`;

const LetterContainer = styled.style`
  width: 700px;
  height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.theme});
  @media (max-width: 768px) {
    width: 450px;
    height: 700px;
    background-size: 450px 700px;
    background-repeat: no-repeat;
  }
`;

const TextContainer = styled.input.attrs({
  placeholder: "템플릿이 들어갈 자리입니다.",
  type: "textarea",
})`
  resize: none;
  white-space: pre-wrap;
  background: transparent;
  width: 600px;
  height: 600px;
  border: 1px solid red;
  text-align: center;
  font-size: ${(props) => `${props.theme[0]}px`};
  font-family: ${(props) => props.theme[1]};
  @media (max-width: 768px) {
    width: 80%;
    height: 400px;
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

// interface ILetter {
//   name: string;
//   initialSrc: Letter;
// }

const WriteContainer = styled.div`
  overflow-x: hidden;
`;

function Write() {
  const [checked, setChecked] = useState<Letter>({ name: "1", src: one });
  const [fontType, setFontType] = useState("");
  const [fontSize, setFontSize] = useState(20);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const selected = Letter.filter((letter) => letter.name === value);
    if (selected) {
      setChecked(selected[0]);
      // console.log("여기여기", selected[0]);
    }
  };

  const onClick = (cor: string) => () => {
    if (cor === "+") setFontSize(fontSize + 1);
    else setFontSize(fontSize - 1);
  };

  const handleFontset = (e: any) => {
    setFontType(e.target.value);
  };

  // const [textValue, setTextValue] = useState("");

  // const handleSetValue = (e: any) => {
  //   setTextValue(e.target.value);
  // };

  // const handleSetTab = (e: any) => {
  //   console.log(e.keyCode);
  //   if (e.keyCode === 9) {
  //     e.preventDefault();
  //     const val = e.target.value;
  //     const start = e.target.selectionStart;
  //     const end = e.target.selectionEnd;
  //     e.target.value = val.substring(0, start) + "\t" + val.substring(end);
  //     e.target.selectionStart = e.target.selectionEnd = start + 1;
  //     handleSetValue(e);
  //     return false;
  //   }
  // };

  return (
    <div>
      <WriteContainer>
        <TopContainer src={basic2} />
        <BackgroundContainer>
          <RadioContainer>
            {Letter.map((letter) => (
              <div key={letter.name}>
                <RadioBtn
                  id={letter.name}
                  name="letter-selector"
                  value={letter.name}
                  checked={letter.name === checked.name}
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
              <FontContent onChange={handleFontset}>
                {fontList.map((font, idx) => {
                  return (
                    <option key={idx} value={font.font}>
                      {font.name}
                    </option>
                  );
                })}
              </FontContent>
            </FontContentContainer>
            {/* <FontSizeContent id="fontSize" onClick={onClick}> */}
            <FontSizeContent>
              <FontSizePlusMinus onClick={onClick("+")}>+</FontSizePlusMinus>
              <FontSizeText>글자크기</FontSizeText>
              <FontSizePlusMinus onClick={onClick("-")}>-</FontSizePlusMinus>
            </FontSizeContent>
            {/* </FontSizeContent> */}
          </FontContainer>
          <LetterContainer theme={checked.src}>
            <TextContainer
              id="text"
              theme={[fontSize, fontType]}
              // value={textValue}
              // onChange={(e) => handleSetValue(e)}
              // onKeyDown={(e) => handleSetTab(e)}
            ></TextContainer>
          </LetterContainer>
          <BtnContainer>
            <PreviewBtn>미리보기</PreviewBtn>
            <SaveBtn>저장</SaveBtn>
          </BtnContainer>
        </BackgroundContainer>
      </WriteContainer>
    </div>
  );
}

export default Write;
