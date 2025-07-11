import {neon} from "@neondatabase/serverless"
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export const sql = neon(process.env.DB_URI);