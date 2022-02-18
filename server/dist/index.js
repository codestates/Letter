"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const ormconfig_1 = __importDefault(require("./config/ormconfig"));
const cookieParser = require('cookie-parser');
const app = (0, express_1.default)();
const port = 7070;
app.use((0, cors_1.default)({
    credentials: true,
    origin: ['http://localhost:3000'],
    methods: ['PATCH', 'POST', 'DELETE', 'GET', 'OPTIONS'],
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(router_1.default);
app.get('/', (req, res) => {
    res.send('It is Letter Server!');
});
(0, typeorm_1.createConnection)(ormconfig_1.default)
    .then(() => {
    console.log('DB CONNECTION!');
    app.listen(port, () => {
        console.log('localhost ' + port + ' opened!!');
    });
})
    .catch((error) => {
    console.log(error);
});
