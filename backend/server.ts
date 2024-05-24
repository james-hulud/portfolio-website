import express, { Request, Response } from "express";
import { Database } from "./database";

const app = express();
const port = process.env.PORT || 3001;
const db = new Database();

app.get("/", async (req: Request, res: Response) => {
  try {
    const result = await db.query('SELECT * FROM "Project" WHERE title != \'Example Project\';');
    res.json(result);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`http://localhost:${port}`);
});
