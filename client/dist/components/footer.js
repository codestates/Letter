/* eslint-disable @typescript-eslint/no-var-requires */
"use strict";
let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const Container = styled_components_1.default.div`
  background-color: rgb(252, 251, 251);
  width: 100%;
  height: 10rem;
  position: relative;
  transform: translateY(-100%);
  top: 0;
  box-shadow: 0 0 10px rgb(212, 212, 212);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;
const Wrapper = styled_components_1.default.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 10rem;
`;
function Footer() {
  return (0, jsx_runtime_1.jsxs)(
    "div",
    {
      children: [
        (0, jsx_runtime_1.jsx)(Wrapper, {}, void 0),
        (0, jsx_runtime_1.jsx)(Container, {}, void 0),
      ],
    },
    void 0
  );
}
exports.default = Footer;
