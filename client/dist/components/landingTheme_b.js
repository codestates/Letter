"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const Envelope_svg_1 = __importDefault(require("../images/Envelope.svg"));
const BackgroundContainer1 = styled_components_1.default.div `
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
const Container_1 = styled_components_1.default.div `
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
const ContainerText_a = styled_components_1.default.div `
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
const ContainerText_b = styled_components_1.default.div `
  width: 680px;
  height: 3.5vh;
  @media (max-width: 768px) {
    width: 80%;
    font-size: 0.9rem;
    height: 4vh;
    margin-left: 0px;
  }
`;
const ContainerImage = styled_components_1.default.img `
  width: 35vmax;
  height: 65vh;
  @media (max-width: 768px) {
    width: 70%;
    margin-left: 0px;
  }
`;
function LandingTheme_b() {
    return ((0, jsx_runtime_1.jsx)(BackgroundContainer1, { children: (0, jsx_runtime_1.jsxs)(Container_1, { children: [(0, jsx_runtime_1.jsx)(ContainerImage, { src: Envelope_svg_1.default }, void 0), (0, jsx_runtime_1.jsx)(ContainerText_a, { children: "\uC9C4\uC2EC\uC774 \uB2F4\uAE34 \uD55C \uC7A5\uC758 \uC190\uD3B8\uC9C0\uB97C \uBC1B\uC544\uBCF4\uC2E0 \uC801 \uC788\uC73C\uC2E0\uAC00\uC694?" }, void 0), (0, jsx_runtime_1.jsx)(ContainerText_b, { children: "\uB514\uC9C0\uD138\uC774\uC9C0\uB9CC \uB9C8\uCE58 \uC544\uB0A0\uB85C\uADF8\uC801\uC778 \uBC29\uC2DD\uC73C\uB85C \uB9C8\uC74C\uC744 \uD45C\uD604\uD574\uBCF4\uC138\uC694." }, void 0)] }, void 0) }, void 0));
}
exports.default = LandingTheme_b;
