"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const logo_letter_svg_1 = __importDefault(require("../images/logo_letter.svg"));
const react_router_dom_1 = require("react-router-dom");
const defaultImage_f_png_1 = __importDefault(require("../images/defaultImage-f.png"));
const Container = styled_components_1.default.div `
  width: 100%;
  height: 6rem;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
`;
const LeftContainer = styled_components_1.default.div `
  width: 30%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: start;
`;
const Logo = styled_components_1.default.img `
  widgh: 50px;
  height: 30px;
  margin-right: 15px;
  cursor: pointer;
`;
const LetterBtn = styled_components_1.default.button `
  width: 55px;
  height: 30px;
  font-size: 11px;
  font-family: "Noto Sans KR";
  cursor: pointer;
  background-color: rgba(171, 134, 67, 1);
  color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  border-style: none;
  &:hover {
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(171, 134, 67, 1);
    color: rgba(171, 134, 67, 1);
  }
`;
const RightContainer = styled_components_1.default.div `
  width: 50%;
  height: 2rem;
  display: flex;
  justify-content: end;
  align-item: center;
`;
const LoginBtn = styled_components_1.default.button `
  width: 55px;
  height: 30px;
  font-size: 11px;
  font-family: "Noto Sans KR";
  cursor: pointer;
  background-color: rgba(171, 134, 67, 1);
  color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  border-style: none;
  &:hover {
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(171, 134, 67, 1);
    color: rgba(171, 134, 67, 1);
  }
`;
const Dropdown = styled_components_1.default.div `
  position: relative;
  display: inline-block;
  &:hover {
    & > div {
      display: block;
    }
  }
`;
const DropdownContent = styled_components_1.default.div `
  display: none;
  position: absolute;
  background-color: #fffcfb;
  min-width: 125px;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
const DropdownContentText = styled_components_1.default.div `
  color: #ab8643;
  padding: 15px 25px;
  text-decoration: none;
  font-family: "Noto Sans KR";
  display: block;
  cursor: pointer;
  &:hover {
    background-color: #ab8643;
    color: #fffcfb;
  }
`;
const Avartar = styled_components_1.default.img `
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-left: 60px;
  cursor: pointer;
`;
function Header(isLogin, handleLogout) {
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(Container, { children: [(0, jsx_runtime_1.jsxs)(LeftContainer, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/" }, { children: (0, jsx_runtime_1.jsx)(Logo, { src: logo_letter_svg_1.default }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(LetterBtn, { children: "\uD3B8\uC9C0\uC4F0\uAE30" }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)(RightContainer, { children: !isLogin ? ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/login" }, { children: (0, jsx_runtime_1.jsx)(LoginBtn, { children: "\uB85C\uADF8\uC778" }, void 0) }), void 0)) : ((0, jsx_runtime_1.jsxs)(Dropdown, { children: [(0, jsx_runtime_1.jsx)(Avartar, { src: defaultImage_f_png_1.default }, void 0), (0, jsx_runtime_1.jsxs)(DropdownContent, { children: [(0, jsx_runtime_1.jsx)(DropdownContentText, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ style: { color: "inherit", textDecoration: "inherit" }, to: { pathname: "/mypage" } }, { children: "\uB9C8\uC774\uD398\uC774\uC9C0" }), void 0) }, void 0), (0, jsx_runtime_1.jsx)(DropdownContentText, Object.assign({ onClick: handleLogout }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ style: { color: "inherit", textDecoration: "inherit" }, to: { pathname: "/" } }, { children: "\uB85C\uADF8\uC544\uC6C3" }), void 0) }), void 0)] }, void 0)] }, void 0)) }, void 0)] }, void 0) }, void 0));
}
exports.default = Header;
