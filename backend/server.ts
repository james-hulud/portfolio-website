import express, { Request, Response } from "express";
import { query } from "./database";

const app = express();
const port = process.env.PORT || 3001;

app.get("/", async (req: Request, res: Response) => {
  try {
    const result = await query("SELECT rolname FROM pg_roles;");
    res.json(result);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`http://localhost:${port}`);
});
