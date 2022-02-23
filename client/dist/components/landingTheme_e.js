"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const Printer_svg_1 = __importDefault(require("../images/Printer.svg"));
const Emails_svg_1 = __importDefault(require("../images/Emails.svg"));
const BackgroundContainer1 = styled_components_1.default.div `
  width: 100vmax;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  background-color: rgba(171, 134, 67, 0.7);
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
  justify-content: end;
  flex-direction: column;
  width: 40vmax;
  height: 95vh;
  font-family: "Noto Sans KR";
  color: #455a64;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
    flex-direction: column;
  }
`;
const ContainerEmailImage = styled_components_1.default.img `
  width: 350px;
  height: 250px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const ContainerText_a = styled_components_1.default.div `
  width: 650px;
  height: 5vh;
  font-size: 1.5rem;
  @media (max-width: 1440px) {
    width: 100%;
    font-size: 2rem;
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
  width: 650px;
  height: 8vh;
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
    height: 4vh;
  }
`;
const ContainerText_c = styled_components_1.default.div `
  width: 650px;
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
    height: 10vh;
  }
`;
const ContainerText_d = styled_components_1.default.div `
  width: 650px;
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
  height: 95vh;
  display: flex;
  align-items: start;
  @media (max-width: 768px) {
    margin-top: 100px;
    height: 50%;
  }
`;
const ContentImage = styled_components_1.default.img `
  width: 35vmax;
  height: 75vh;
`;
function LandingTheme_e() {
    return ((0, jsx_runtime_1.jsxs)(BackgroundContainer1, { children: [(0, jsx_runtime_1.jsx)(ContainerImage, { children: (0, jsx_runtime_1.jsx)(ContentImage, { src: Printer_svg_1.default }, void 0) }, void 0), (0, jsx_runtime_1.jsxs)(Container_1, { children: [(0, jsx_runtime_1.jsx)(ContainerEmailImage, { src: Emails_svg_1.default }, void 0), (0, jsx_runtime_1.jsx)(ContainerText_a, { children: "#3." }, void 0), (0, jsx_runtime_1.jsx)(ContainerText_b, { children: "\uC791\uC131\uD558\uC2E0 \uD3B8\uC9C0\uB294 \uC778\uC1C4\uB97C \uD1B5\uD574" }, void 0), (0, jsx_runtime_1.jsx)(ContainerText_c, { children: "\uB9CC\uB098\uBCF4\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }, void 0), (0, jsx_runtime_1.jsx)(ContainerText_d, { children: "\uB0B4 \uC774\uBA54\uC77C\uB85C \uBC1B\uC544\uBCF4\uAE30 \uB610\uB294 \uC778\uC1C4\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }, void 0)] }, void 0)] }, void 0));
}
exports.default = LandingTheme_e;
