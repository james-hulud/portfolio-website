import { Pool, QueryResult } from "pg";

const pool = new Pool({
  user: "james",
  host: "localhost",
  database: "postgres",
  password: "",
  port: 5432,
});

// Listen for the 'connect' event
pool.on("connect", () => {
  console.log("Connected to PostgreSQL database");
});

export const query = async (
  queryText: string,
  params?: any[]
): Promise<any[]> => {
  const client = await pool.connect();
  try {
    const result: QueryResult = await client.query(queryText, params);
    return result.rows;
  } finally {
    client.release();
  }
};
