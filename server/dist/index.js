"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("typescript");
const http = require("http");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookieParser = require('cookie-parser');
const app = (0, express_1.default)();
const port = 80;
app.use((0, cors_1.default)({
    credentials: true,
    origin: ["http://localhost:3000"],
    methods: ['PATCH', 'POST', 'DELETE', 'GET', 'PUT', 'OPTIONS'],
}));
app.use(cookieParser());
app.get('/', (req, res) => {
    res.send('It is Letter Server !');
});
app.listen(port, () => {
    console.log('localhost ' + port + ' opened!!');
});
