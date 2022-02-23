"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
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
const Container = styled_components_1.default.div `
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
const Content = styled_components_1.default.div `
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
const BtnContainer = styled_components_1.default.div `
  width: 550px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const StartBtn = styled_components_1.default.button `
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
    return ((0, jsx_runtime_1.jsx)(BackgroundContainer1, { children: (0, jsx_runtime_1.jsxs)(Container, { children: [(0, jsx_runtime_1.jsx)(Content, { children: "\u00A0\u00A0\uC774\uC81C \uC2DC\uC791\uD574\uBCF4\uC138\uC694." }, void 0), (0, jsx_runtime_1.jsx)(BtnContainer, { children: (0, jsx_runtime_1.jsx)(StartBtn, { children: "\uC2DC\uC791\uD558\uAE30" }, void 0) }, void 0)] }, void 0) }, void 0));
}
exports.default = LandingTheme_f;
