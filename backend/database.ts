import { Pool, QueryResult } from "pg";

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

  createTable = async () => {
    console.log("Creating table...");
  };
}
