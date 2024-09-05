import express from "express";
import { Pool } from "pg";
import authRoutes from "./routes/authRoutes";

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool
  .connect()
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Database connection error", err));

app.use(express.json());

app.use("/auth", authRoutes);

app.get("/", async (req, res) => {
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
