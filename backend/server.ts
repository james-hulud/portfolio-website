import express, { Request, Response } from "express";
import { Database } from "./database";
import cors from "cors";
import path from "path";
import http, { Server } from "http";

const app = express();
const port = process.env.PORT || 3001;
const db = new Database();

const server = http.createServer(app);

const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../frontend/portfolio/.next");

// Allows fetch requests in client components
app.use(cors());

app.use(express.static(buildPath));

app.get("/*", (req, res) => {
  res.sendFile(
    path.join(_dirname, "../frontend/portfolio/dist/index.html"),
    (error) => {
      if (error) {
        res.status(500).send(error);
      }
    }
  );
});

app.get("/projects", async (req: Request, res: Response) => {
  try {
    const result = await db.query(
      "SELECT * FROM \"Project\" WHERE title != 'Example Project';"
    );
    res.json(result);
  } catch (error) {
    console.error(error);
  }
});

app.get("/lastproject", async (req: Request, res: Response) => {
  try {
    const result = await db.query(
      'SELECT * FROM "Project" WHERE id=(SELECT MAX(id) FROM "Project") limit 1'
    );
    res.json(result[0]);
  } catch (error) {
    console.log(error);
  }
});

app.get("/collaborations", async (req: Request, res: Response) => {
  try {
    const result = await db.query(
      "SELECT * FROM \"Collaboration\" WHERE title != 'Example collaboration';"
    );
    res.json(result);
  } catch (error) {
    console.error(error);
  }
});

app.get("/updates", async (req: Request, res: Response) => {
  try {
    const result = await db.query('SELECT * FROM "lifeupdate"');
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port as number || 3001, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
