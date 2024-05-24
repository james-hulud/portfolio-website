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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_1 = require("../src/lib/prisma");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var project, collaboration;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma_1.prisma.project.upsert({
                        where: { title: "Shopio - Ecommerce website" },
                        update: {},
                        create: {
                            title: "Shopio - Ecommerce website",
                            slideshowDirs: [
                                "shopio/shopio1.png",
                                "shopio/shopio2.png",
                                "shopio/shopio3.png",
                                "shopio/shopio4.png",
                            ],
                            description: "\n        A simple ecommerce website created with Flask.\n        Has a search bar, user registration, login and logout, checkout, items with their respective information.\n        Backend is connected to an SQLite database.\n        Website is dynamic and changes depending on the user's state, e.g. logged in or out, has data stored on their session cookie.\n        ",
                            githubLink: "https://github.com/james-hulud/shopio-ecommerce",
                            stack: ["html", "bootstrap", "js", "flask"],
                        },
                    })];
                case 1:
                    project = _a.sent();
                    console.log({ project: project });
                    return [4 /*yield*/, prisma_1.prisma.collaboration.upsert({
                            where: { title: "The Detextive - Terminal based game" },
                            update: {},
                            create: {
                                title: "The Detextive - Terminal based game",
                                slideshowDirs: [
                                    "detextive/det1.png",
                                    "detextive/det2.png",
                                    "detextive/det3.png",
                                    "detextive/det4.png",
                                ],
                                description: "\n      A terminal detective game written in Python.\n      The player plays as a detective who has been tasked with solving a whodunnit style murder in a large eery mansion.\n      You can traverse several rooms, possible containing items and npcs with randomly generated traits.\n      After gathering sufficient evidence, the player may accuse one of the npcs as the murderer.\n\n  \n      \nMade in collaboration at Cardiff University.\n      ",
                                githubLink: "https://git.cardiff.ac.uk/c23013397/cm1101_group_project",
                                stack: ["python"],
                            },
                        })];
                case 2:
                    collaboration = _a.sent();
                    console.log({ collaboration: collaboration });
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () { return prisma_1.prisma.$disconnect(); })
    .catch(function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(e);
                return [4 /*yield*/, prisma_1.prisma.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
