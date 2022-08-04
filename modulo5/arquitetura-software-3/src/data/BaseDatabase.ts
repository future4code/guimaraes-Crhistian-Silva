import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

export abstract class BaseDatabase {

  protected static connection = knex({
        client: "mysql",
        connection: {
          host: process.env.DATABASE_HOST,
          port: 3306,
          user: process.env.DATABASE_USER,
          password: process.env.DATABASE_PASSWORD,
          database: process.env.DATABASE_NAME,
        }
      })
    }

  
