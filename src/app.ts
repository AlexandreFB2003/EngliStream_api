import express, { Request, Response } from "express";
import { Pool } from "pg";

const app = express();
const port = process.env.PORT || 3000;

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool
  .connect()
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Database connection error", err));

// Middleware
app.use(express.json());

// Routes
app.get("/", async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error querying the database");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
