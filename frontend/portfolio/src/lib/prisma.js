"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
var client_1 = require("@prisma/client");
var globalForPrisma = global;
// reusing the same prisma client here as it is being exported
exports.prisma = globalForPrisma.prisma ||
    new client_1.PrismaClient({
        log: ["query"],
    });
if (process.env.NODE_ENV !== "production")
    globalForPrisma.prisma = exports.prisma;
