/* eslint-disable @typescript-eslint/no-var-requires */
"use strict";
let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
console.log("제발 성공해줘!!!!");
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const app_1 = __importDefault(require("./app"));
react_dom_1.default.render(
  (0, jsx_runtime_1.jsx)(
    react_1.default.StrictMode,
    { children: (0, jsx_runtime_1.jsx)(app_1.default, {}, void 0) },
    void 0
  ),
  document.getElementById("root")
);
