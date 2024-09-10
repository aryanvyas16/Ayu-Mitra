import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";


const sql = neon(
    "postgresql://Ayu_Mitra_owner:VvexpUZ6jG2H@ep-wild-mud-a59dac8r.us-east-2.aws.neon.tech/Ayu_Mitra1?sslmode=require"
)

export const db = drizzle(sql, {schema});


//setting our drizzle to interact with database