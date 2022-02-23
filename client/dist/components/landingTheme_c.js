"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const Select_svg_1 = __importDefault(require("../images/Select.svg"));
const BackgroundContainer1 = styled_components_1.default.div `
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
const Container_1 = styled_components_1.default.div `
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
const ContainerText_a = styled_components_1.default.div `
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
const ContainerText_b = styled_components_1.default.div `
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
const ContainerText_c = styled_components_1.default.div `
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
const ContainerText_d = styled_components_1.default.div `
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
const ContainerImage = styled_components_1.default.img `
  width: 35vmax;
  height: 75vh;
  @media (max-width: 768px) {
    margin-top: 100px;
    height: 50%;
  }
`;
function LandingTheme_c() {
    return ((0, jsx_runtime_1.jsxs)(BackgroundContainer1, { children: [(0, jsx_runtime_1.jsx)(ContainerImage, { src: Select_svg_1.default }, void 0), (0, jsx_runtime_1.jsxs)(Container_1, { children: [(0, jsx_runtime_1.jsx)(ContainerText_a, { children: "#1." }, void 0), (0, jsx_runtime_1.jsx)(ContainerText_b, { children: "\uD3B8\uC9C0 \uBAA9\uC801\uC5D0 \uB9DE\uB294" }, void 0), (0, jsx_runtime_1.jsx)(ContainerText_c, { children: "\uD15C\uD50C\uB9BF\uC744 \uC120\uD0DD\uD558\uC138\uC694." }, void 0), (0, jsx_runtime_1.jsx)(ContainerText_d, { children: "\uD3B8\uC9C0 \uC791\uC131\uC774 \uC5B4\uB824\uC6B0\uC2E0 \uBD84\uB4E4\uC744 \uC704\uD574 \uAE30\uBCF8\uC801\uC778 \uD15C\uD50C\uB9BF\uC774 \uC81C\uACF5\uB429\uB2C8\uB2E4." }, void 0)] }, void 0)] }, void 0));
}
exports.default = LandingTheme_c;
