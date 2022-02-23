"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const Typewriter_svg_1 = __importDefault(require("../images/Typewriter.svg"));
const BackgroundContainer1 = styled_components_1.default.div `
  width: 100vmax;
  height: 95vh;
  display: flex;
  align-items: end;
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
  align-items: end;
  justify-content: start;
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
    height: 30vh;
    flex-direction: column;
  }
`;
const ContainerBlank = styled_components_1.default.div `
  width: 10vmax;
  height: 20vh;
`;
const ContainerText_a = styled_components_1.default.div `
  width: 29vmax;
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
  width: 29vmax;
  height: 15vh;
  font-size: 3rem;
  font-weight: bold;
  @media (max-width: 1440px) {
    width: 100%;
    font-size: 2rem;
    margin-left: 90px;
    height: 7vh;
  }
  @media (max-width: 768px) {
    width: 80%;
    font-size: 2rem;
    margin-left: 0px;
    height: 8.5vh;
    margin-top: 25px;
  }
`;
const ContainerText_c = styled_components_1.default.div `
  width: 29vmax;
  height: 14vh;
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
    margin-left: 0px;
    height: 20vh;
  }
`;
const ContainerText_d = styled_components_1.default.div `
  width: 29vmax;
  height: 10vh;
  font-size: 1rem;
  color: #747171;
  @media (max-width: 1440px) {
    width: 100%;
    font-size: 0.9rem;
    margin-left: 90px;
    height: 5vh;
  }
  @media (max-width: 768px) {
    width: 80%;
    font-size: 0.9rem;
    margin-left: 0px;
  }
`;
const ContainerImage = styled_components_1.default.div `
  width: 35vmax;
  height: 50vh;

  display: flex;
  justify-content: end;
  flex-direction: column;
`;
const ContentImage = styled_components_1.default.img `
  width: 40vmax;
  height: 75vh;
`;
const ContainerBlank2 = styled_components_1.default.div `
  width: 10vmax;
  height: 20vh;
`;
function LandingTheme_d() {
    return ((0, jsx_runtime_1.jsxs)(BackgroundContainer1, { children: [(0, jsx_runtime_1.jsxs)(Container_1, { children: [(0, jsx_runtime_1.jsx)(ContainerBlank, {}, void 0), (0, jsx_runtime_1.jsx)(ContainerText_a, { children: "#2." }, void 0), (0, jsx_runtime_1.jsx)(ContainerText_b, { children: "\uD3B8\uC9C0\uC9C0\uC640 \uAE00\uAF34\uC744 \uC120\uD0DD \uD6C4" }, void 0), (0, jsx_runtime_1.jsx)(ContainerText_c, { children: "\uD3B8\uC9C0\uB97C \uC791\uC131\uD558\uC138\uC694." }, void 0), (0, jsx_runtime_1.jsx)(ContainerText_d, { children: "5\uAC00\uC9C0 \uD3B8\uC9C0\uC9C0 \uC774\uBBF8\uC9C0\uC640 109\uAC00\uC9C0\uC758 \uC190\uAE00\uC528 \uAE00\uAF34\uC774 \uC81C\uACF5\uB429\uB2C8\uB2E4." }, void 0)] }, void 0), (0, jsx_runtime_1.jsxs)(ContainerImage, { children: [(0, jsx_runtime_1.jsx)(ContainerBlank2, {}, void 0), (0, jsx_runtime_1.jsx)(ContentImage, { src: Typewriter_svg_1.default }, void 0)] }, void 0)] }, void 0));
}
exports.default = LandingTheme_d;
