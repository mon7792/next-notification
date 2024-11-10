import { Pool } from "pg";

let pool: Pool | null = null;

export async function connect(): Promise<Pool> {
	if (pool) return pool;
	pool = new Pool({
		connectionString: process.env.DATABASE_URL,
	});
	await pool.connect();
	return pool;
}
