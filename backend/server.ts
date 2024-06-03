import express, { Request, Response } from "express";
import { Database } from "./database";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;
const db = new Database();

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
app.use(cors());

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

app.listen(port as number, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
