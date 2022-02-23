"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const theme_1 = __importDefault(require("../components/theme"));
const landingTheme_a_1 = __importDefault(require("../components/landingTheme_a"));
const landingTheme_b_1 = __importDefault(require("../components/landingTheme_b"));
const landingTheme_c_1 = __importDefault(require("../components/landingTheme_c"));
const landingTheme_d_1 = __importDefault(require("../components/landingTheme_d"));
const landingTheme_e_1 = __importDefault(require("../components/landingTheme_e"));
const landingTheme_f_1 = __importDefault(require("../components/landingTheme_f"));
const LandingContainer = styled_components_1.default.div `
  overflow-x: hidden;
`;
function Landing() {
    return ((0, jsx_runtime_1.jsxs)(LandingContainer, { children: [(0, jsx_runtime_1.jsx)(theme_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(landingTheme_a_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(landingTheme_b_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(landingTheme_c_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(landingTheme_d_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(landingTheme_e_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(landingTheme_f_1.default, {}, void 0)] }, void 0));
}
exports.default = Landing;
