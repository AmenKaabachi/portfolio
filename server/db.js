import { createPool } from 'mysql2/promise';
import { config } from 'dotenv';
config();

const pool = createPool({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;
