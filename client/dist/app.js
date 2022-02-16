/* eslint-disable @typescript-eslint/no-var-requires */
"use strict";
let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const header_1 = __importDefault(require("./components/header"));
//import Login from "./pages/login";
// import Mypage from "./pages/mypage";
// import Signup from "./pages/signup";
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
function App() {
  const [isLogin, setIsLogin] = (0, react_1.useState)(false);
  const handleLogout = () => {
    setIsLogin(false);
  };
  return (0, jsx_runtime_1.jsxs)(
    react_router_dom_1.BrowserRouter,
    {
      children: [
        (0, jsx_runtime_1.jsx)(
          header_1.default,
          Object.assign({}, isLogin, handleLogout),
          void 0
        ),
        (0, jsx_runtime_1.jsx)(react_router_dom_1.Routes, {}, void 0),
      ],
    },
    void 0
  );
}
exports.default = App;
