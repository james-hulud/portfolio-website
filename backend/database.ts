import { Pool, Client, QueryResult } from "pg";

export class Database {
  pool: Pool;
  databaseName: string;
  host: string;

  constructor() {
    this.databaseName = "postgres";
    this.host = "localhost";

    this.pool = new Pool({
      user: "james",
      host: this.host,
      database: this.databaseName,
      password: "",
      port: 5432,
    });
  }

  testConnection = () => {
    this.pool.on("connect", () => {
      console.log(`Connected to db: ${this.databaseName}`);
    });
  };

  query = async (queryText: string, params?: any[]): Promise<any[]> => {
    const client = await this.pool.connect();
    try {
      const result: QueryResult = await client.query(queryText, params);
      return result.rows;
    } finally {
      client.release();
    }
  };

  create = async (queryText: string, params?: any[]) => {
    const client = await this.pool.connect();
    try {
      await client.query(queryText, params);
    } finally {
      client.release();
    }
  };
}

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

const insert = async () => {
  const db = new Database();

  const result = await db.query(`
  SELECT EXISTS(SELECT 1 FROM lifeupdate WHERE id=1)
  `);

  console.log(result);
  if (result[0]["exists"] === true) {
    return null;
  }
  db.query(`
  INSERT INTO lifeupdate (date, content)
  VALUES (
    'June 3, 2024',
    '
    I recently secured an internship with Cardiff University!
    The purpose of the role is to adapt the frontend and backend of the web application FreeTxt.
    The app can be used to analyse qualitative survey responses,
    utilising natural language processing it can provide information such as general text sentiment, summarisations and more.
    It was made using Flask and will be an exciting project to work on!
    '
  )
  `);
};

// insert();
// init()