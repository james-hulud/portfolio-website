"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
const db = new database_1.Database();
// TODO: Only allow requests to be made from the domain name my website is using, security
// const whitelist = ['https://your-application.com'];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
// };
// Allows fetch requests in client components
app.use((0, cors_1.default)());
app.get("/projects", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db.query("SELECT * FROM \"Project\" WHERE title != 'Example Project';");
        res.json(result);
    }
    catch (error) {
        console.error(error);
    }
}));
app.get("/lastproject", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db.query('SELECT * FROM "Project" WHERE id=(SELECT MAX(id) FROM "Project") limit 1');
        res.json(result[0]);
    }
    catch (error) {
        console.log(error);
    }
}));
app.get("/collaborations", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db.query("SELECT * FROM \"Collaboration\" WHERE title != 'Example collaboration';");
        res.json(result);
    }
    catch (error) {
        console.error(error);
    }
}));
app.get("/updates", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db.query('SELECT * FROM "lifeupdate"');
        res.json(result);
    }
    catch (error) {
        console.log(error);
    }
}));
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
