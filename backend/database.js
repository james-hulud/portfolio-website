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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const pg_1 = require("pg");
class Database {
    constructor() {
        this.testConnection = () => {
            this.pool.on("connect", () => {
                console.log(`Connected to db: ${this.databaseName}`);
            });
        };
        this.query = (queryText, params) => __awaiter(this, void 0, void 0, function* () {
            const client = yield this.pool.connect();
            try {
                const result = yield client.query(queryText, params);
                return result.rows;
            }
            finally {
                client.release();
            }
        });
        this.create = (queryText, params) => __awaiter(this, void 0, void 0, function* () {
            const client = yield this.pool.connect();
            try {
                yield client.query(queryText, params);
            }
            finally {
                client.release();
            }
        });
        this.databaseName = "postgres";
        this.host = "localhost";
        this.pool = new pg_1.Pool({
            user: "james",
            host: this.host,
            database: this.databaseName,
            password: "",
            port: 5432,
        });
    }
}
exports.Database = Database;
const init = () => {
    const db = new Database();
    db.create(`CREATE TABLE LifeUpdate
  (
    id SERIAL PRIMARY KEY,
    date VARCHAR(255),
    content TEXT
  )`);
};
// const insert = async () => {
//   const db = new Database();
//   const result = await db.query(`
//   SELECT EXISTS(SELECT 1 FROM lifeupdate WHERE id=1)
//   `);
//   console.log(result);
//   if (result[0]["exists"] === true) {
//     return null;
//   }
//   db.query(`
//   INSERT INTO lifeupdate (date, content)
//   VALUES (
//     'June 3, 2024',
//     'As of writing, in the summer of 2024, I am doing an internship with Cardiff University involving adapting the frontend and backend of the web application FreeTxt. The application utilises Natural Language Processing to analyse questionnaire response data.'
//   )
//   `);
// };
const insert = () => __awaiter(void 0, void 0, void 0, function* () {
    const db = new Database();
    const result = yield db.query(`
  SELECT EXISTS(SELECT 1 FROM lifeupdate WHERE id=4)
  `);
    console.log(result);
    if (result[0]["exists"] === true) {
        return null;
    }
    db.query(`
  INSERT INTO lifeupdate (date, content)
  VALUES (
    'June 4, 2024',
    '
    Portfolio website is launched!
    '
  )
  `);
});
// insert();
// init()
