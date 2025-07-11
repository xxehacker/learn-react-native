import express from "express";
import cors from "cors";
import { sql } from "./db.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(
  express.json({
    limit: "100kb",
  })
);
app.use(express.urlencoded({ extended: true, limit: "100kb" }));

async function initDB() {
  try {
    await sql`CREATE TABLE IF NOT EXISTS transactions (
        id SERIAL PRIMARY KEY, 
        user_id VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        amount DECIMAL(10, 2) NOT NULL,
        category VARCHAR(255) NOT NULL,
        created_at DATE NOT NULL DEFAULT CURRENT_DATE,
        updated_at DATE NOT NULL DEFAULT CURRENT_DATE
        )`;
    console.log("Connected to PostgreSQL");
  } catch (error) {
    console.log("Error creating table", error);
    process.exit(1); // Exit the process with a failure code
  }
}

//! import Routes 
import transactionRoutes from "./routes/transactions.routes.js";


//! use Routes
app.use("/api/v1/transactions", transactionRoutes);


initDB().then(() => {
  app.listen(process.env.PORT || 9002, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
