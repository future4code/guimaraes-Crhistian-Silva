import { BaseDatabase } from "./data/BaseDatabase";

class TableConnection extends BaseDatabase {
  public createTable = async (): Promise<void> => {
    try {
      await TableConnection.connection.raw(
        `
         CREATE TABLE IF NOT EXISTS labook_users(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
         );
   
         CREATE TABLE IF NOT EXISTS labook_posts(
            id VARCHAR(255) PRIMARY KEY,
            photo VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            type ENUM("normal","event") DEFAULT "normal",
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            author_id VARCHAR(255),
            FOREIGN KEY (author_id) REFERENCES labook_users (id)
         )

         CREATE TABLE  IF NOT EXISTS labook_relations(
          id VARCHAR(255) PRIMARY KEY,
          friend_1_id VARCHAR (255) NOT NULL,
          friend_2_id VARCHAR (255) NOT NULL,
          FOREIGN KEY (friend_1_id) REFERENCES labook_users (id),
          FOREIGN KEY (friend_2_id) REFERENCES labook_users (id) 
       );
      `
      );
    } catch (error) {
      console.log("error", error);
    }
  };
}
