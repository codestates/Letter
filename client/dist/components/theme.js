"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const basic_jpg_1 = __importDefault(require("../images/basic.jpg"));
const BackgroundContainer = styled_components_1.default.div `
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  position: relative;
  background-image: url(${basic_jpg_1.default});
  background-size: cover;
  color: white;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Content = styled_components_1.default.div `
  font-size: 6rem;
  font-family: "Handletter";
  @media (max-width: 768px) {
    width: 55%;
    font-size: 3rem;
    display: flex;
    margin-top: 130px;
  }
`;
function Theme() {
    return ((0, jsx_runtime_1.jsx)(BackgroundContainer, { children: (0, jsx_runtime_1.jsx)(Content, { children: " \"\uB2F9\uC2E0\uC758 \uC544\uB0A0\uB85C\uADF8 \uAC10\uC131\uC744 \uAE68\uC6B0\uC138\uC694.\"" }, void 0) }, void 0));
}
exports.default = Theme;
