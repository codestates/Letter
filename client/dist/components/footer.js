"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const logo_letter_svg_1 = __importDefault(require("../images/logo_letter.svg"));
const githublogo_png_1 = __importDefault(require("../images/githublogo.png"));
const Container = styled_components_1.default.div `
  background-color: rgba(171, 134, 67, 0.2);
  width: 100%;
  height: 160px;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    background-size: cover;
  }
`;
const LeftContainer = styled_components_1.default.div `
  width: 30vw;
  height: 160px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Logo = styled_components_1.default.img `
  width: 80px;
  height: 160px;
  margin-left: 120px;
`;
const Content = styled_components_1.default.div `
  width: 20vw;
  height: 160px;
  color: #ab8643;
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-family: "Noto Sans KR";
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightContainer = styled_components_1.default.div `
  width: 70vw;
  height: 160px;
  display: flex;
  justify-content: end;
  align-items: center;
`;
const ServiceContainer = styled_components_1.default.div `
  width: 20vw;
  height: 110px;
  color: #ab8643;
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  font-family: "Noto Sans KR";
`;
const ServiceContent = styled_components_1.default.div `
  width: 60px;
  height: 2rem;
`;
const ServiceImage = styled_components_1.default.img `
  width: 30px;
  height: 2rem;
  cursor: pointer;
`;
const AboutContainer = styled_components_1.default.div `
  width: 20vw;
  height: 110px;
  color: #ab8643;
  display: flex;
  align-items: start;
  flex-direction: column;
`;
const AboutTitle = styled_components_1.default.div `
  width: 70px;
  height: 16px;
  font-weight: bold;
  font-family: "Noto Sans KR";
`;
const AboutContent = styled_components_1.default.div `
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  font-size: 14px;
`;
const AboutContent_a = styled_components_1.default.div `
  width: 45px;
  height: 22px;
  cursor: pointer;
  font-family: "Noto Sans KR";
`;
const AboutContent_b = styled_components_1.default.div `
  width: 45px;
  height: 22px;
  cursor: pointer;
  font-family: "Noto Sans KR";
`;
const AboutContent_c = styled_components_1.default.div `
  width: 45px;
  height: 22px;
  cursor: pointer;
  font-family: "Noto Sans KR";
`;
const AboutContent_d = styled_components_1.default.div `
  width: 45px;
  height: 32px;
  cursor: pointer;
  font-family: "Noto Sans KR";
`;
const StyledLink = styled_components_1.default.a `
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: #ab8643;
`;
function Footer() {
    const githubUri = `https://github.com/codestates/Letter`;
    const bongUri = `https://github.com/dbswnqhd12`;
    const minUri = `https://github.com/crq932`;
    const hwanUri = `https://github.com/dlawjdghks11`;
    const jooUri = `https://github.com/juyeong7`;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(Container, { children: [(0, jsx_runtime_1.jsxs)(LeftContainer, { children: [(0, jsx_runtime_1.jsx)(Logo, { src: logo_letter_svg_1.default }, void 0), (0, jsx_runtime_1.jsx)(Content, { children: "\u00A9 2022 Copyright Letter Inc. All rights reserved." }, void 0)] }, void 0), (0, jsx_runtime_1.jsxs)(RightContainer, { children: [(0, jsx_runtime_1.jsxs)(ServiceContainer, { children: [(0, jsx_runtime_1.jsx)(ServiceContent, { children: "Service" }, void 0), (0, jsx_runtime_1.jsx)("a", Object.assign({ href: githubUri }, { children: (0, jsx_runtime_1.jsx)(ServiceImage, { src: githublogo_png_1.default }, void 0) }), void 0)] }, void 0), (0, jsx_runtime_1.jsxs)(AboutContainer, { children: [(0, jsx_runtime_1.jsx)(AboutTitle, { children: "About us" }, void 0), (0, jsx_runtime_1.jsxs)(AboutContent, { children: [(0, jsx_runtime_1.jsx)(StyledLink, Object.assign({ href: bongUri }, { children: (0, jsx_runtime_1.jsx)(AboutContent_a, { children: "\uC724\uC8FC\uBD09" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(StyledLink, Object.assign({ href: minUri }, { children: (0, jsx_runtime_1.jsx)(AboutContent_b, { children: "\uC2EC\uBBFC\uC7AC" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(StyledLink, Object.assign({ href: hwanUri }, { children: (0, jsx_runtime_1.jsx)(AboutContent_c, { children: "\uC784\uC815\uD658" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(StyledLink, Object.assign({ href: jooUri }, { children: (0, jsx_runtime_1.jsx)(AboutContent_d, { children: "\uC815\uC8FC\uC601" }, void 0) }), void 0)] }, void 0)] }, void 0)] }, void 0)] }, void 0) }, void 0));
}
exports.default = Footer;
