"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const header_1 = __importDefault(require("./components/header"));
const footer_1 = __importDefault(require("./components/footer"));
const landing_1 = __importDefault(require("./pages/landing"));
const login_1 = __importDefault(require("./pages/login"));
// import Mypage from "./pages/mypage";
// import Signup from "./pages/signup";
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const styled_components_1 = require("styled-components");
const styled_reset_1 = __importDefault(require("styled-reset"));
const GlobalStyle = (0, styled_components_1.createGlobalStyle) `
  ${styled_reset_1.default}
  /* other styles */
  @font-face {
    font-family: 'Handletter';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_05@1.0/Handletter.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'SangSangShin';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/SangSangShin.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  } 
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
  .notosanskr * { 
     font-family: 'Noto Sans KR', sans-serif;
  }
`;
function App() {
    const [isLogin, setIsLogin] = (0, react_1.useState)(false);
    const handleLogout = () => {
        setIsLogin(false);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(GlobalStyle, {}, void 0), (0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [(0, jsx_runtime_1.jsx)(header_1.default, Object.assign({}, isLogin, handleLogout), void 0), (0, jsx_runtime_1.jsx)(footer_1.default, {}, void 0), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(landing_1.default, {}, void 0) }, void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/login", element: (0, jsx_runtime_1.jsx)(login_1.default, {}, void 0) }, void 0)] }, void 0)] }, void 0)] }, void 0));
}
exports.default = App;
