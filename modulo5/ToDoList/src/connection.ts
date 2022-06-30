import dotenv from 'dotenv';
import knex from "knex";

dotenv.config();

const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    multiStatements: true
  }
});

export default connection