"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const Texting_svg_1 = __importDefault(require("../images/Texting.svg"));
const BackgroundContainer1 = styled_components_1.default.div `
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
const Container_1 = styled_components_1.default.div `
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
const ContainerText_a = styled_components_1.default.div `
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
const ContainerText_b = styled_components_1.default.div `
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
const ContainerText_c = styled_components_1.default.div `
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
const ContainerImage = styled_components_1.default.img `
  width: 50vmax;
  height: 65vh;
  @media (max-width: 768px) {
    width: 100%;
    height: 40vh;
    margin-left: 0px;
  }
`;
function LandingTheme_a() {
    return ((0, jsx_runtime_1.jsxs)(BackgroundContainer1, { children: [(0, jsx_runtime_1.jsxs)(Container_1, { children: [(0, jsx_runtime_1.jsx)(ContainerText_a, { children: "\uB514\uC9C0\uD138 \uC2DC\uB300\uC5D0 \uC9C0\uCE5C" }, void 0), (0, jsx_runtime_1.jsx)(ContainerText_b, { children: "\uC5EC\uB7EC\uBD84\uC758" }, void 0), (0, jsx_runtime_1.jsx)(ContainerText_c, { children: "\uC544\uB0A0\uB85C\uADF8 \uAC10\uC131\uC744 \uCC3E\uC544\uB4DC\uB824\uC694." }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)(ContainerImage, { src: Texting_svg_1.default }, void 0)] }, void 0));
}
exports.default = LandingTheme_a;
